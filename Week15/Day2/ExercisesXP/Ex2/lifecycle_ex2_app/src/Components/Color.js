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
    const snapshotDiv = document.getElementById("snapshot");
    snapshotDiv.innerHTML = `Before the update, the favorite was ${prevState.favoriteColor}`;
    return prevState;
  }

  componentDidUpdate(prevProps, prevState) {
    const mountDiv = document.getElementById("didMount");
    mountDiv.innerHTML = `The previous favorite color was ${prevState.favoriteColor}. The current favorite color is ${this.state.favoriteColor}`;

    const updateDiv = document.getElementById("didUpdate");
    updateDiv.innerHTML = `The updated value is ${this.state.favoriteColor}`;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
        <div id="didMount"></div>
        <div id="snapshot"></div>
        <div id="didUpdate"></div>
      </>
    );
  }
}

export default Color;
