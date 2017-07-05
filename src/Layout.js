import React, { Component } from "react";
import { Link } from "react-router";
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
                  {this.state.postsNumber}
                </span>
              </Link>
            </li>
            <li>
              <Link to="posts-details">Post Details</Link>
            </li>
            <li>
              <Link to="posts-form">Post Form</Link>
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

export default Layout;
