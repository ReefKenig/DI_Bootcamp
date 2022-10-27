import { connect } from "react-redux";
import { increment_counter, decrement_counter } from "../redux/actions";

const Counter = (props) => {
  const incrementIfOdd = () => {
    if (props.counter % 2 !== 0) {
      props.inc();
    }
  };

  const incrementWithTimeout = () => {
    setTimeout(() => props.inc(), 1000);
  };

  return (
    <>
      <button onClick={props.inc}>+</button>
      <button onClick={incrementIfOdd}>Increment if Odd</button>
      <button onClick={incrementWithTimeout}>Increment After 1 Second</button>
      <h3>{props.counter}</h3>
      <button onClick={props.dec}>-</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increment_counter()),
    dec: () => dispatch(decrement_counter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
