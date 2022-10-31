import { connect } from "react-redux";
import { search_movie, fetch_movies, set_loading } from "../redux/actions";

const SearchForm = props => {
  const handleChange = e => {};

  const handleSubmit = e => {};

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

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
