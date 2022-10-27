import { FETCH } from "./actions";

const initState = { pictures: [] };

export const pictureReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH:
      return { ...state, pictures: action.payload };
    default:
      return { ...state };
  }
};
