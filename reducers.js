import { FETCH } from "./actions";

const initState = {pictures: []};

export const pictureReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH:
      const data = fetch(
        `https://api.pexels.com/v1/search/?query=${action.payload}&per_page=30`,
        {
          method: "GET",
          headers: { Accept: "application/json", Authorization: API_KEY }
        }
      ).then(response => response.json());
      return { ...state, pictures: [...data] };
    default:
      return { ...state };
  }
};
