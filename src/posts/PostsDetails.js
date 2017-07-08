import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";

class PostsDetails extends Component {
  render() {
    return <Post post={this.props.postToShow} />;
  }
}
const mapStateToProps = state => {
  return {
    postToShow: state.posts.postToShow
  };
};
export default connect(mapStateToProps)(PostsDetails);
