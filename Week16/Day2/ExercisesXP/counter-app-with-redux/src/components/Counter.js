import { React, Component } from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "../redux/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increase}>+</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.decrease}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increaseCount()),
    decrease: () => dispatch(decreaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
