import React, { Component } from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }

  shouldComponentUpdate() {
    return true;
    // return false;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `The previous favorite color was ${prevState.favoriteColor}. The current favorite color is ${this.state.favoriteColor}`
    );

    // I don't know how to render this div...
    return (
      <div>
        <h1>
          The previous favorite color was {prevState.favoriteColor}. The current
          favorite color is {this.state.favoriteColor}
        </h1>
      </div>
    );
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

export default Color;
