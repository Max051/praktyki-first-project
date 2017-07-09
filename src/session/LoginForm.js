import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { Login, Logout } from "../actions/sessioActions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      error: false
    };
  }
  login = e => {
    this.setState({
      login: e.target.value
    });
  };
  password = e => {
    this.setState({
      password: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    axios
      .post("http://praktyki-react.herokuapp.com/api/v1/sessions", {
        user: {
          email: this.state.login,
          password: this.state.password
        }
      })
      .then(respone => {
        console.log(respone);
        this.props.Login(respone);
        this.props.router.push("posts");
      })
      //   this.props.router.push("posts");
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };
  onLogout = () => {
    this.props.Logout();
  };
  render() {
    return (
      <div className="container">
        <h3>Login:</h3>
        <form className="form-group">
          <StyledInput
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={this.login}
            value={this.state.login}
          />{" "}
          <StyledInput
            className="form-control"
            placeholder="Password"
            type="password"
            onChange={this.password}
            value={this.state.password}
          />{" "}
          <button
            style={{ marginTop: "10px" }}
            className="btn btn-default"
            onClick={this.onSubmit}
          >
            {" "}Submit{" "}
          </button>{" "}
        </form>{" "}
        {console.log(this.props.session)}
        {this.props.session.token
          ? <button className="btn btn-default" onClick={this.onLogout}>
              {" "}Logut{" "}
            </button>
          : false}{" "}
        {this.state.error ? "Server Error" : false}{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    session: state.session
  };
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators({ Login: Login, Logout: Logout }, dispatch);
};
const StyledInput = styled.input`margin-top: 10px;`;

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
