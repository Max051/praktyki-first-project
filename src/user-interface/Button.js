import React, { Component } from "react";
class Button extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        onClick={this.props.onClick}
        className={`btn btn-${this.props.btnStyle} ${this.props.className}`}
      >
        {this.props.label}
      </button>
    );
  }
}
export default Button;
