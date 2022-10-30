const OMDB_API = "https://www.omdbapi.com";
const API_KEY = "";

export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const search_movie = (title) => async (dispatch) => {
  try {
    const response = await fetch(`${OMDB_API}/?apikey=${API_KEY}&t=${title}`);
    const data = await response.json();
    dispatch({ type: SEARCH_MOVIE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const FETCH_MOVIES = "FETCH_MOVIES";
export const fetch_movies = () => {};

export const FETCH_MOVIE = "FETCH_MOVIE";
export const fetch_movie = () => {};

export const LOADING = "LOADING";
export const loading = () => {};
