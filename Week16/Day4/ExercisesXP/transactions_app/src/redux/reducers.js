import { INSERT, DELETE, UPDATE, UPDATE_INDEX } from "./actions";

export const transactionReducer = (state, action = {}) => {
  const list = JSON.parse(localStorage.getItem("transactions"));
  switch (action.type) {
    case INSERT:
      list.push(action.payload);
      localStorage.setItem("transactions", JSON.stringify(list));
      return { list, currentIndex: -1 };
    case UPDATE:
      list[state.currentIndex] = action.payload;
      localStorage.setItem("transactions", JSON.stringify(list));
      return { list, currentIndex: -1 };
    case UPDATE_INDEX:
      return { list, currentIndex: action.payload };
    case DELETE:
      list.splice(action.payload, 1);
      localStorage.setItem("transactions", JSON.stringify(list));
      return { list, currentIndex: -1 };
    default:
      return state;
  }
};
