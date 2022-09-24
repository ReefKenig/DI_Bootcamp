import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  vote = (index) => {
    const newState = [...this.state.languages];
    newState[index].votes++;
    this.setState({ languages: newState });
  };

  render() {
    return (
      <>
        <h1>Vote your Language!</h1>
        <div className="languages">
          {this.state.languages.map((item, index) => (
            <div key={index} className="language">
              <div className="voteCount">{item.votes}</div>
              <div className="languageName">{item.name}</div>
              <button onClick={() => this.vote(index)}>Vote</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
