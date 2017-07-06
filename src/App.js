import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router";
import PostsDetails from "./components/PostsDetails";

import PostPage from "./components/PostPage";
import Home from "./Home";

import PostForm from "./components/PostForm";
import Layout from "./Layout.js";
import AddPostsPage from "./components/AddPostPage";
import loginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <Layout>
              <IndexRoute component={Home} />
              <Route path="posts" component={PostPage} />
              <Route path="posts-details" component={PostsDetails} />
              <Route path="posts-form" component={AddPostsPage} />
              <Route path="login" component={loginForm} />
            </Layout>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
