import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import apiClient from "../lib/api-client";
class PostsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }
  removePostFromDetails = () => {
    this.props.router.push("posts");
  };
  componentDidMount() {
    apiClient
      .get("example/api/v1/posts/" + this.props.params.id)
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => {});
  }
  render() {
    return (
      <Post removePost={this.removePostFromDetails} post={this.state.post} />
    );
  }
}
export default PostsDetails;
