import React, { Component } from "react";

class PostsDetails extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.countPosts)}
        Post Details
      </div>
    );
  }
}
export default PostsDetails;
