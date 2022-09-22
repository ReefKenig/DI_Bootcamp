import React, { Component } from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
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
