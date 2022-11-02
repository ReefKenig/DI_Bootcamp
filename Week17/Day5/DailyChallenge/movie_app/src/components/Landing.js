import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import Spinner from "./Spinner";
import { connect } from "react-redux";

const Landing = (props) => {
  const is_loading = props.loading;
  return (
    <div className="container">
      <SearchForm />
      {is_loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { loading: state.loading };
};

export default connect(mapStateToProps)(Landing);
