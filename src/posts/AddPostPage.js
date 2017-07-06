import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { withRouter } from "react-router";

export class AddPostPage extends Component {
  newPost = post => {
    this.props.dispatch({
      type: "ADD POST",
      data: { ...post, timestamp: new Date().toString() }
    });
    this.props.router.push("posts");
  };
  render() {
    return (
      <div>
        <PostForm onAddpost={this.newPost} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.postsCollection
  };
};

export default connect(mapStateToProps)(AddPostPage);
