import axios from "axios";

const OMDB_API = "https://www.omdbapi.com";
const API_KEY = "49dc3704";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const fetch_movies = term => dispatch => {
  // Fetch movies based on the sarch term
  axios
    .get(`${OMDB_API}/?apikey=${API_KEY}&s=${term}`)
    .then(response => dispatch({ type: FETCH_MOVIES, payload: response.data }))
    .catch(err => console.log(err));
};

export const FETCH_MOVIE = "FETCH_MOVIE";
export const fetch_movie = id => dispatch => {
  // Fetch a specific movie by ID value
  axios
    .get(`${OMDB_API}/?apikey=${API_KEY}&i=${id}`)
    .then(response => dispatch({ type: FETCH_MOVIE, payload: response.data }))
    .catch(err => console.log(err));
};

export const LOADING = "LOADING";
export const set_loading = () => {
  return { type: LOADING };
};
