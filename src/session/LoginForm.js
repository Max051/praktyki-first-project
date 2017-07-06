import React, {
  Component
} from "react";
import {
  connect
} from "react-redux";
import {
  withRouter
} from "react-router";
import axios from "axios";

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
      .post("http://192.168.10.127:3001/sign-in", {
        email: this.state.login,
        password: this.state.password
      })
      .then(respone => {
        console.log(respone);
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });

    //    this.props.dispatch({
    //     type: "Login",
    //    data: { login: this.state.login, password: this.state.password }
    //  });
    //  this.props.router.push("posts");
  };
  onLogout = () => {
    this.props.dispatch({
      type: "Logout"
    });
  };
  render() {
    return ( <
      div >
      <
      form className = "form-group" >
      <
      input className = "form-control"
      type = "email"
      placeholder = "Email"
      onChange = {
        this.login
      }
      value = {
        this.state.login
      }
      /> <
      input className = "form-control"
      placeholder = "Password"
      type = "password"
      onChange = {
        this.password
      }
      value = {
        this.state.password
      }
      /> <
      button onClick = {
        this.onSubmit
      } > Submit < /button> < /
      form > {
        this.props.session.login ?
        <
        button onClick = {
          this.onLogout
        } > Logut < /button> :
        false
      } {
        this.state.error ? "Server Error" : false
      } <
      /div>
    );
  }
}
const mapStateToProps = state => {
  return {
    session: state.session
  };
};
export default connect(mapStateToProps)(LoginForm);