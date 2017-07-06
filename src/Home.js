import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  decrement = () => {
    return this.props.dispatch({ type: "DECREMENT" });
  };
  increment = () => {
    return this.props.dispatch({ type: "INCREMENT" });
  };
  render() {
    return (
      <div>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.increment}>increment</button>
        Home Counter:{this.props.counter}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Home);
