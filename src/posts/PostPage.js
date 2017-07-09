import React, { Component } from "react";
import PostList from "./PostsList";
import PostForm from "./PostForm";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import {
  addPostStore,
  removeFromStore,
  showPost
} from "../actions/postsActions";
import { connect } from "react-redux";

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchValue: ""
    };
  }
  addPostStore = post => {
    this.props.addPostStore(post);
  };
  removeFromStore = postId => {
    this.props.removeFromStore(postId);
  };
  search = e => {
    this.setState({
      searchValue: e.target.value
    });
  };
  showPost = id => {
    this.props.showPost(id);
    this.props.router.push("posts-details");
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
          onSubmit={this.addPost}
          onAddpost={this.addPostStore}
          onNewPost={this.addToCounter}
        />
        <StyledSearchBar
          type="text"
          onChange={this.search}
          placeholder="search"
          className="form-control"
        />
        <PostList
          showPost={this.showPost}
          valueToFilter={this.state.searchValue}
          posts={this.props.posts}
          removeFromList={this.removeFromStore}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.postCollection,
    postToShow: state.posts.postToShow
  };
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addPostStore: addPostStore,
      showPost: showPost,
      removeFromStore: removeFromStore
    },
    dispatch
  );
};

const StyledSearchBar = styled.input`margin-bottom: 10px;`;

export default connect(mapStateToProps, matchDispatchToProps)(PostPage);
