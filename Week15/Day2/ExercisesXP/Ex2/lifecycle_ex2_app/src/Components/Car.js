import React, { Component } from "react";
import Garage from "./Garage";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "silver" };
  }

  render() {
    const { model, size } = this.props;
    return (
      <>
        <h1>
          This car is {this.state.color} {model}
        </h1>
        <Garage size={size}></Garage>
      </>
    );
  }
}

export default Car;
