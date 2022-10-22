import { INCREASE, DECREASE } from "./reducers";

const initState = { count: 0 };

export const storeReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
};
