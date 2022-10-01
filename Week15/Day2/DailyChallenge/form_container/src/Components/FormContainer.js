import React, { Component } from "react";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVega: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name, type, checked } = e.target;
    console.log(name);
    console.log([name]);

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <h1>Sample Form</h1>
        <form className="inputForm"></form>
      </>
    );
  }
}

export default FormContainer;
