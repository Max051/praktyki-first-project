import React, { Component } from "react";
import PostList from "./PostsList";
import PostForm from "./PostForm";
import styled from "styled-components";
class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchValue: ""
    };
    this.addPost = this.addPost.bind(this);
  }

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
  addToCounter = () => {
    this.props.countPosts(this.state.posts.length);
  };
  render() {
    return (
      <div>
        <PostForm onSubmit={this.addPost} onNewPost={this.addToCounter} />
        <StyledSearchBar
          type="text"
          onChange={this.search}
          placeholder="search"
          className="form-control"
        />
        <PostList
          valueToFilter={this.state.searchValue}
          posts={this.state.posts}
          removeFromList={this.removePostFromPosts}
        />
      </div>
    );
  }
}

// ;

const StyledSearchBar = styled.input`margin-bottom: 10px;`;

export default PostPage;
