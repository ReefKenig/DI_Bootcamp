import "./App.css";
import React, { Component } from "react";
import quotes from "./quotesDB";
import Quote from "./Components/Quote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  generateQuote = () => {
    const currentIndex = quotes
      .map((item) => item.quote)
      .indexOf(this.state.quote);
    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    const { quote, author } = quotes[newIndex];
    this.setState({ quote: quote, author: author });
  };

  randomizeColor = () => {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${newColor}`;
  };

  render() {
    return (
      <>
        <Quote
          color={this.randomizeColor()}
          handleClick={this.generateQuote}
          {...this.state}
        ></Quote>
      </>
    );
  }
}

export default App;
