import { useState } from "react";
import { connect } from "react-redux";
import { autocomplete } from "../redux/actions";
import AutoCities from "./AutoCities";

const SearchForm = (props) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Look for a place..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => props.auto(text)}>Search</button>
      <AutoCities />
    </>
  );
};

const mapStateToProps = (state) => {
  return { cities: state.cities };
};

const mapDispatchToProps = (dispatch) => {
  return { auto: (text) => dispatch(autocomplete(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
