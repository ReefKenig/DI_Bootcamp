import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetch_movie, set_loading } from "../redux/actions";
import Spinner from "./Spinner";

const IMDB_URL = "https://www.imdb.com";

class Movie extends Component {
  componentDidMount() {
    const movie_id = window.location.href.split("/")[4];
    this.props.fetch(movie_id);
    this.props.load();
  }

  render() {
    const movie = this.props.movie;
    const loading = this.props.loading;

    const movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Release Date:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About</h3>
              {movie.Plot}
              <hr />
              <a
                href={`${IMDB_URL}/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Back to Home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    const content = loading ? <Spinner /> : movieInfo;

    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => {
  return { movie: state.movie, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (id) => dispatch(fetch_movie(id)),
    load: () => dispatch(set_loading),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
