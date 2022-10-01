import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ error: error });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h2>Something went wrong...</h2>
          <detail>{this.state.error && this.state.error.toString()}</detail>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
