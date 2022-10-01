import React, { Component } from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red", show: true };
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

class Child extends Color {
  constructor() {
    super();
    this.state = {};
  }

  componentWillUnmount() {
    if (this.state.show === false) {
      alert("The header component is about to be unmounted");
    }
  }

  handleClick() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <header>Hello world</header>
        <button onClick={this.handleClick}>Delete header</button>
      </>
    );
  }
}

export default Color;
