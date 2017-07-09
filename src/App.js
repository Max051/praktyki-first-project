import React, { Component } from "react";
import "./App.css";
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router";
import PostsDetails from "./posts/PostsDetails";

import PostPage from "./posts/PostPage";
import Home from "./Home";

import PostForm from "./posts/PostForm";
import Layout from "./Layout.js";
import AddPostsPage from "./posts/AddPostPage";
import loginForm from "./session/LoginForm";
import registerForm from "./session/RegisterForm";
class App extends Component {
  authenticateUser = (nextState, replace) => {
    const state = this.props.store.getState();
    if (!state.session.token) {
      replace({ pathname: "login" });
    }
  };
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path="/" component={Layout} onEnter={this.authenticateUser}>
            <Layout>
              <IndexRoute component={Home} />
              <Route path="posts" component={PostPage} />
              <Route path="posts-details" component={PostsDetails} />
              <Route path="posts-form" component={AddPostsPage} />
            </Layout>
          </Route>
          <Route path="login" component={loginForm} />
          <Route path="sign_up" component={registerForm} />
        </Router>
      </div>
    );
  }
}

export default App;
