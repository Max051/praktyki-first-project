import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      registered: ""
    };
  }

  login = e => {
    this.setState({
      email: e.target.value
    });
  };
  password = e => {
    this.setState({
      password: e.target.value
    });
  };
  repeatPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    axios
      .post("https://praktyki-react.herokuapp.com/api/v1/registrations", {
        user: { email: this.state.email, password: this.state.password }
      })
      .then(respone => {
        console.log(respone);
        this.setState({
          registered: "Succes"
        });
        this.props.router.push("login");
      })
      .catch(error => {
        this.setState({
          registered: "Fail"
        });
      });
  };

  render() {
    return (
      <div>
        <form className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={this.state.login}
            onChange={this.login}
          />{" "}
          <input
            className="form-control"
            placeholder="Password"
            onChange={this.password}
            type="password"
            value={this.state.password}
          />{" "}
          <input
            className="form-control"
            placeholder="Reapeat Password"
            type="password"
            onChange={this.repeatPassword}
            value={this.state.confirmPassword}
          />{" "}
          <button onClick={this.onSubmit}> Submit </button>{" "}
        </form>{" "}
        {this.state.registered}
      </div>
    );
  }
}

export default RegisterForm;
