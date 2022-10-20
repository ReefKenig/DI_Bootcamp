import { React, Component } from "react";
import { connect } from "react-redux";
import Child from "./Components/Child";
import { handleChangeAction } from "./redux/actions";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { prop_one: "One", prop_two: "Two" };
  }

  handleChange = (e) => {
    const txt = e.target.value;
    this.setState({ prop_one: txt });
  };

  render() {
    return (
      <div className="App">
        <h1>Redux simple app</h1>
        <div>{this.state.prop_one}</div>
        <input type="text" onChange={this.handleChange} />
        <div>{this.state.prop_two}</div>
        <h2>Redux store</h2>
        <div>Prop one- store: {this.props.a}</div>
        <input type="text" onChange={this.props.handleC} />
        <div>Prop two- store: {this.props.b}</div>
        <Child />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { a: state.prop_one, b: state.prop_two };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleC: (e) => dispatch(handleChangeAction(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
