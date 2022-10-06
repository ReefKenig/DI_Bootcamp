import "./App.css";
import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("The header component is about to be unmounted");
  }

  render() {
    return (
      <>
        <header>Hello world</header>
      </>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        {this.state.show ? <Child /> : null}
        <button onClick={this.handleClick}>Delete header</button>
      </div>
    );
  }
}

export default App;
