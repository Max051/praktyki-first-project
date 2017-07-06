import React, { Component } from "react";
import Post from "./Post";
export default class PostList extends Component {
  filterMap() {
    const posts = this.props.posts;
    console.log(posts);
    if (this.props.valueToFilter.length > 0) {
      return posts.filter(el => el.title.includes(this.props.valueToFilter));
    }
    return posts;
  }

  render() {
    return (
      <div
        className="container"
        style={{ paddingLeft: "0px", marginTop: "40px" }}
      >
        {this.filterMap().map((post, i) =>
          <Post removePost={this.props.removeFromList} key={i} post={post} />
        )}
      </div>
    );
  }
}
