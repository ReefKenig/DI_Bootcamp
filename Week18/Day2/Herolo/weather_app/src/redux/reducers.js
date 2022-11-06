import {
  AUTOCOMPLETE,
  CURRENT_FORECAST,
  FUTURE_FORECAST,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "./actions";

const initState = {
  favorites: JSON.parse(window.localStorage.getItem("favorites")) || [],
  cities: [],
  current_forecast: {},
  future_forecast: {},
};

export const rootReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case AUTOCOMPLETE:
      return { ...state, cities: action.payload };
    case CURRENT_FORECAST:
      return { ...state, current_forecast: action.payload };
    case FUTURE_FORECAST:
      return { ...state, future_forecast: action.payload };
    case ADD_FAVORITE:
      state.favorites.push(action.payload);
      window.localStorage.setItem("favorites", JSON.stringify(state.favorites));
      return { ...state, favorites: state.favorites };
    case REMOVE_FAVORITE:
      const index = state.favorites.indexOf(action.payload);
      state.favorites.splice(index, 1);
      window.localStorage.setItem("favorites", JSON.stringify(state.favorites));
      return { ...state, favorites: state.favorites };
    default:
      return { ...state };
  }
};
