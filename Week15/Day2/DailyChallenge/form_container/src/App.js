import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false,
    };
  }

  handleChange = (event) => {
    const { value, name, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <h1>Sample Form</h1>
        <form className="inputForm">
          <input
            className="text"
            onChange={this.handleChange}
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
          ></input>{" "}
          <br />
          <input
            className="text"
            onChange={this.handleChange}
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
          ></input>{" "}
          <br />
          <input
            className="text"
            onChange={this.handleChange}
            name="age"
            placeholder="Age"
            value={this.state.age}
          ></input>{" "}
          <br />
          <br />
          <label>
            <input
              className="radiobutton"
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              className="radiobutton"
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <label className="destination-header">Select your destination</label>
          <br />
          <select
            className="destination-input"
            onChange={this.handleChange}
            name="destination"
            value={this.state.destination}
          >
            <option value="">-- Please choose a destination --</option>
            <option value="Tahiland">Tahiland</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
          <br />
          <br />
          <label className="restrictions-title">Dietary restrictions:</label>
          <br />
          <div className="restrictions">
            <input
              type="checkbox"
              name="nutsFree"
              onChange={this.handleChange}
              checked={this.state.nutsFree}
            />
            <span>Nuts free</span>
            <br />
            <input
              type="checkbox"
              name="lactoseFree"
              onChange={this.handleChange}
              checked={this.state.lactoseFree}
            />
            <span>Lactose free</span>
            <br />
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
            <span>Vegan</span>
          </div>
          <button className="submit">Submit</button>
        </form>
        <hr />
        <div className="entered-info">
          <h2>Entered information:</h2>
          <p>
            Your name: {this.state.firstName} {this.state.lastName}
          </p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restrictions: </p>
          <div className="restrictions">
            <span>**Nuts free : {this.state.nutsFree ? " Yes" : "No"}</span>{" "}
            <br />
            <span>
              **Lactose free : {this.state.lactoseFree ? " Yes" : "No"}
            </span>{" "}
            <br />
            <span>**Vegan meal : {this.state.isVegan ? " Yes" : "No"}</span>
          </div>
        </div>
      </>
    );
  }
}

export default App;
