import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postsNumber: 0
    };
  }
  CountPosts = PostsNumber => {
    console.log(PostsNumber);
    this.setState({
      postsNumber: PostsNumber + 1
    });
  };
  render() {
    return (
      <div className="container">
        <nav className="navbar nav-default">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="posts">
                Posts{" "}
                <span className="label label-primary">
                  {this.props.posts.length}
                </span>
              </Link>
            </li>
            <li>
              <Link to="posts-details">Post Details</Link>
            </li>
            <li>
              <Link to="posts-form">Post Form</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              {" "}{" "}
              {this.props.session.login
                ? this.props.session.login
                : "Please Log In"}
            </li>
          </ul>
        </nav>

        <div className="container">
          {console.log(this.props.children)}
          {React.Children.map(this.props.children, c =>
            React.cloneElement(c, { countPosts: num => this.CountPosts(num) })
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    session: state.session,
    posts: state.posts.postCollection
  };
};

export default connect(mapStateToProps)(Layout);
