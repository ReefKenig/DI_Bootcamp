export const FETCH = "FETCH";
export const fetchPictures = term => {
  return { type: FETCH, payload: term };
};
