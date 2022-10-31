import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MovieContainer = () => {};

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default MovieContainer;
