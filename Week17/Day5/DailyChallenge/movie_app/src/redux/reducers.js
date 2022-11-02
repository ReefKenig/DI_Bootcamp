import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./actions";

const initState = {
  term: "",
  movies: [],
  loading: false,
  movie: [],
};

export const rootReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload, loading: false };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
