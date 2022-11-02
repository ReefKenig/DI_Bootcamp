import { CHANGE_TXT } from "./actions";

const initState = { txt: "luka" };

export const myReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CHANGE_TXT:
      return { ...state, txt: action.payload };
    default:
      return { ...state };
  }
};
