import React, { Component } from "react";
import PostList from "./PostsList";
import PostForm from "./PostForm";
import styled from "styled-components";
import { connect } from "react-redux";

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchValue: ""
    };
    this.addPost = this.addPost.bind(this);
  }
  addPostStore = post => {
    return this.props.dispatch({ type: "ADD POST", data: post });
  };
  removeFromStore = postId => {
    return this.props.dispatch({
      type: "REMOVE POST",
      idToRemove: postId
    });
  };
  addPost = post => {
    const d = new Date().toDateString();
    this.setState({ posts: [...this.state.posts, { ...post, timestamp: d }] });
  };
  removePostFromPosts = e => {
    this.setState({
      posts: this.state.posts.filter(el => el.id != e.target.id)
    });
  };
  search = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <PostForm
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
    posts: state.posts.postCollection
  };
};

const StyledSearchBar = styled.input`margin-bottom: 10px;`;

export default connect(mapStateToProps)(PostPage);
