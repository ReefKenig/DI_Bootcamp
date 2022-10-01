import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    if (this.state.counter > 5) {
      throw Error("I crashed!");
    }
    return <div onClick={this.handleClick}>{this.state.counter}</div>;
  }
}

export default BuggyCounter;
