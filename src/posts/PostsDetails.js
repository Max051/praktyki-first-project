import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";

class PostsDetails extends Component {
  removePostFromDetails = () => {
    this.props.dispatch({
      type: "REMOVE_SHOW_POST"
    });
    // this.props.router.push("posts");
  };
  checkPostToShow = () => {
    console.log(this.props.postToShow.id);
    if (this.props.postToShow.id) {
      return (
        <Post
          removePost={this.removePostFromDetails}
          post={this.props.postToShow}
        />
      );
    } else {
      return <div>Choose some post</div>;
    }
  };
  render() {
    return this.checkPostToShow();
  }
}
const mapStateToProps = state => {
  return {
    postToShow: state.posts.postToShow
  };
};
export default connect(mapStateToProps)(PostsDetails);
