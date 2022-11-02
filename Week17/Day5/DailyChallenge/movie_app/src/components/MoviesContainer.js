import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MovieContainer = (props) => {
  const movies = props.movies;
  let content;
  content =
    movies.Response === "True"
      ? movies.Search.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })
      : null;
  return <div className="row">{content}</div>;
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(MovieContainer);
