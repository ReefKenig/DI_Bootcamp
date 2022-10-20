const initState = { prop_one: "One- store", prop_two: "Two- store" };

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "CHANGE_PROP_ONE":
      return { ...state, prop_one: action.payload };
    default:
      return { ...state };
  }
};
