import React, { Component } from "react";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import PostForm from "./PostForm";
import { withRouter } from "react-router";
import { addPostStore } from "../actions/postsActions";
export class AddPostPage extends Component {
  newPost = post => {
    this.props.addNewPost(post);
    this.props.router.push("posts");
  };
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
    posts: state.posts.postCollection
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(AddPostPage);
