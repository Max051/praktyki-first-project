import React, { Component } from "react";
import Button from "./Button";
class AlertButton extends Component {
  alert() {
    alert("clicked");
  }
  render() {
    return (
      <Button
        onClick={this.alert}
        //  className={`btn btn-${this.props.btnStyle} ${this.props.className}`}
        {...this.props}
      />
    );
  }
}

export default AlertButton;
