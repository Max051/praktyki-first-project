import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-redux";
import Button from "../user-interface/Button";

//this.props.router.push("posts")
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      id: props.lastPostId
    };
  }
  updateName = e => {
    this.setState({
      title: e.target.value
    });
  };
  updateContent = e => {
    this.setState({
      content: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      title: this.state.title,
      content: this.state.content,
      id: this.state.id
    });

    //   this.props.onNewPost();
  };
  addPOst = e => {
    e.preventDefault();
    this.setState({
      id: this.state.id + 1
    });
    this.props.onAddpost({
      title: this.state.title,
      content: this.state.content,
      id: this.state.id
    });
    //   this.props.onNewPost();
  };
  render() {
    return (
      <div className="container">
        <form className="" className="form-group">
          <label
            style={{ marginTop: "10px", marginBottom: "10px" }}
            htmlFor="titleId"
          >
            Title:
          </label>
          <input
            style={{ marginBottom: "10px" }}
            id="titleId"
            className="form-control"
            onChange={this.updateName}
            type="text"
            value={this.state.title}
          />
          <label style={{ marginBottom: "10px" }} htmlFor="contentId">
            Content:
          </label>
          <textarea
            style={{ marginBottom: "10px" }}
            id="contentId"
            className="form-control"
            onChange={this.updateContent}
            value={this.state.content}
            cols="30"
            rows="10"
          />
          <Button
            btnStyle={"success"}
            id={this.state.id}
            onClick={this.addPOst}
            label={"add Post"}
          />
        </form>
      </div>
    );
  }
}

export default PostForm;
