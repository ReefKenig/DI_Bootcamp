import { AGE_UP, AGE_DOWN } from "./actions";

const initState = { age: 20 };

export const age_reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case AGE_UP:
      return { ...state };
    case AGE_DOWN:
      return { ...state };
    default:
      return { ...state };
  }
};
