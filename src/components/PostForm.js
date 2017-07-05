import React, { Component } from "react";
import Button from "../user-interface/Button";

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      id: 0
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
    this.setState({
      id: this.state.id + 1
    });
    this.props.onNewPost();
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
            onClick={this.onSubmit}
            label={"add Post"}
          />
        </form>
      </div>
    );
  }
}
