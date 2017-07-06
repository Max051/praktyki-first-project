import React, { Component } from "react";
import PostsList from "./PostsList";

class ParityList extends Component {
  render() {
    let postsWithIndex = this.props.map((val, index) => {
      let newTitle;
      if (index % 2 == 0) {
        newTitle = val.title + "Parzysty";
      } else {
        newTitle = val.title + "Nieparzysty";
      }
      return { ...val, title: newTitle };
    });
    return <PostsList {...this.props} posts={postsWithIndex} />;
  }
}

export default ParityList;
