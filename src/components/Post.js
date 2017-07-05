import React, { Component } from "react";
import Button from "../user-interface/Button";
import AlertButton from "../user-interface/AlertButton";
import styled from "styled-components";

export default class Post extends Component {
  render() {
    return (
      <StyledPost>
        <StyledButton btnStyle="danger" id={this.props.post.id} label={"x"} />
        <h2 style={{ marginTop: "-10px" }}>
          {this.props.post.title}
        </h2>
        <div
          style={{
            wordWrap: "break-word",
            padding: "10px",
            textAlign: "left"
          }}
        >
          {this.props.post.content}
        </div>
        <span>
          {this.props.post.timestamp}
        </span>
      </StyledPost>
    );
  }
}
const StyledPost = styled.div`
  background-color: lightgrey;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(AlertButton)`
            background-color: inherit;
            color: red;
            border: none;
            align-self: flex-end;
`;
