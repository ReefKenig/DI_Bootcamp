import { connect } from "react-redux";
import { showDetails } from "../redux/actions";

const MovieList = (props) => {
  return (
    <div className="movieList">
      <h1>Movie List</h1>
      {props.movieList.map((movie, index) => {
        return (
          <div key={index}>
            {movie.title}
            <button className="details" onClick={() => props.showD(movie)}>
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movieList: state.movieList };
};

const mapDispatchToProps = (dispatch) => {
  return { showD: (movie) => dispatch(showDetails(movie)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
