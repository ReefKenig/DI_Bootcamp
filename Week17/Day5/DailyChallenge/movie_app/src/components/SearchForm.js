import { useState } from "react";
import { connect } from "react-redux";
import { fetch_movies, set_loading } from "../redux/actions";

const SearchForm = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetch(text);
    props.load();
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" />
        </h1>
        <form id="searchForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search..."
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (term) => dispatch(fetch_movies(term)),
    load: () => dispatch(set_loading),
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
