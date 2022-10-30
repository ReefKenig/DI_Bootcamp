import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./actions";

const initState = { text: "", movies: [], loading: false, movie: [] };

export const rootReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state };
    case FETCH_MOVIES:
      return { ...state };
    case FETCH_MOVIE:
      return { ...state };
    case LOADING:
      return { ...state };
    default:
      return { ...state };
  }
};
