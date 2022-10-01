import React, { Component } from "react";

class Events extends React.Component {
  constructor() {
    super();
    this.state = { isToggleOn: true };
  }

  clickMe = () => {
    alert("I was clicked");
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(`The ENTER key was pressed, your input is: ${e.target.value}`);
    }
  };

  onOff = (e) => {
    let text = "";
    if (this.state.isToggleOn) {
      this.setState({ isToggleOn: false });
      text = "OFF";
    } else {
      this.setState({ isToggleOn: true });
      text = "ON";
    }
    e.target.innerHTML = text;
  };

  render() {
    return (
      <>
        <button onClick={this.clickMe}>Click Me!</button>
        <input
          onKeyPress={this.handleKeyPress}
          placeholder={"Press the ENTER key!"}
        ></input>
        <button onClick={this.onOff}>ON</button>
      </>
    );
  }
}

export default Events;
