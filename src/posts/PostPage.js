import React, { Component } from "react";
import PostList from "./PostsList";
import PostForm from "./PostForm";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import {
  addPostStore,
  removeFromStore,
  showPost,
  fetchPosts
} from "../actions/postsActions";
import { connect } from "react-redux";
import axios from "axios";
import apiClient from "../lib/api-client";

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
    apiClient
      .delete("example/api/v1/posts/" + postId)
      .then(response => {
        this.props.removeFromStore(postId);
      })
      .catch(error => {
        console.log(error);
      });
    //  this.props.removeFromStore(postId);
  };
  search = e => {
    this.setState({
      searchValue: e.target.value
    });
  };
  showPost = id => {
    // this.props.showPost(id);
    this.props.router.push("posts-details/" + id);
    //  this.props.router.push("posts-details");
  };

  componentDidMount() {
    console.log("aa");
    apiClient
      .get("example/api/v1/posts")
      .then(response => {
        console.log(response);
        this.props.fetchPosts(response.data.posts);
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
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
  console.log(state);
  return {
    posts: state.posts.postCollection,
    postToShow: state.posts.postToShow,
    session: state.session
  };
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addPostStore: addPostStore,
      showPost: showPost,
      removeFromStore: removeFromStore,
      fetchPosts: fetchPosts
    },
    dispatch
  );
};

const StyledSearchBar = styled.input`margin-bottom: 10px;`;

export default connect(mapStateToProps, matchDispatchToProps)(PostPage);
