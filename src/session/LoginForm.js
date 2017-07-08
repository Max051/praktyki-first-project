import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";
import { bindActionCreators } from "redux";

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
      <div>
        <form className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={this.login}
            value={this.state.login}
          />{" "}
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            onChange={this.password}
            value={this.state.password}
          />{" "}
          <button onClick={this.onSubmit}> Submit </button>{" "}
        </form>{" "}
        {this.props.session.login
          ? <button onClick={this.onLogout}> Logut </button>
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
export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
