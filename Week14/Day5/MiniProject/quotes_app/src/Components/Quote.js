import React, { Component } from "react";

class Quote extends Component {
  // Props = quote, author, color, handleClick()
  render() {
    const color = this.props.color;
    document.documentElement.style.backgroundColor = color;
    return (
      <div className="quotebox">
        <div className="fadeIn" key={Math.random()} style={{ color: color }}>
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: color }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default Quote;
