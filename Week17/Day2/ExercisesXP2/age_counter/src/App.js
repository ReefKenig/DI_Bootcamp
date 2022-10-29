import "./App.css";
import { connect } from "react-redux";
import { increase_age, decrease_age } from "./redux/actions";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <span>Your Age: {props.age}</span>
        <button onClick={props.up}>Age Up</button>
        <button onClick={props.down}>Age Down</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { age: state.age };
};

const mapDispatchToProps = (dispatch) => {
  return {
    up: () => dispatch(increase_age()),
    down: () => dispatch(decrease_age()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
