import React, { Component } from "react";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import PostForm from "./PostForm";
import { withRouter } from "react-router";
import { addPostStore } from "../actions/postsActions";
import axios from "axios";
import apiClient from "../lib/api-client";

export class AddPostPage extends Component {
  newPost = post => {
    apiClient
      .post(
        "example/api/v1/posts",
        {
          post: {
            title: post.title,
            body: post.content,
            user_id: this.props.session.user_id
          }
        },
        {
          headers: {
            "X-User-Email": this.props.session.email,
            "X-User-Token": this.props.session.token
          }
        }
      )
      .then(response => {
        console.log(response);
        this.props.addNewPost(response.data);
        this.props.router.push("posts");
      })
      .catch(error => {
        console.log(post);
        console.log(error);
      });
  };
  /*
  newPost = post => {
    this.props.addNewPost(post);
    this.props.router.push("posts");
  };
  */
  render() {
    return (
      <div>
        <PostForm
          lastPostId={
            this.props.posts[this.props.posts.length - 1]
              ? this.props.posts[this.props.posts.length - 1].id + 1
              : 0
          }
          onAddpost={this.newPost}
        />
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ addNewPost: addPostStore }, dispatch);
};
const mapStateToProps = state => {
  return {
    posts: state.posts.postCollection,
    session: state.session
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(AddPostPage);
