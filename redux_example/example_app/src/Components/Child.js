import { connect } from "react-redux";

const Child = (props) => {
  return (
    <div>
      <h1>Child</h1>
      <div>{props.a1}</div>
      <div>{props.b1}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { a1: state.prop_one, b1: state.prop_two };
};

export default connect(mapStateToProps)(Child);
