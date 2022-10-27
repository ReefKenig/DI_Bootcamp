import "./App.css";
import { connect } from "react-redux";
import { increase_age, decrease_age } from "./redux/actions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Your Age: </span>
        <button>Age Up</button>
        <button>Age Down</button>
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
