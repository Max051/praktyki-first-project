import React, { Component } from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import _ from "lodash";
export default class PostList extends Component {
  filterMap() {
    const posts = _.orderBy(this.props.posts, ["id"]);

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
          <Post
            showPost={this.props.showPost}
            removePost={this.props.removeFromList}
            key={i}
            post={post}
          />
        )}
      </div>
    );
  }
}
PostList.propTypes = {
  valueToFilter: PropTypes.string
};
