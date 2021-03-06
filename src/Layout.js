import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
              <Link to="sign_up">Sign Up</Link>
            </li>
            <li style={{ float: "right" }}>
              {" "}<a>
                {" "} {console.log(this.props)}
                {this.props.session.email
                  ? this.props.session.email
                  : "Please Log In"}
              </a>
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
Layout.propTypes = {
  session: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(Layout);
