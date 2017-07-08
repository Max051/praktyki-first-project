import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { decrement, increment } from "./actions/counterAction.js";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>decrement</button>
        <button onClick={this.props.increment}>increment</button>
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
const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { increment: increment, decrement: decrement },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(Home);
