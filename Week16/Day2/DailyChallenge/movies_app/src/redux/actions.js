export const DETAILS = "DETAILS";

export const showDetails = (movie) => {
  return { type: DETAILS, payload: movie };
};
