export const FETCH = "FETCH";

const API_KEY = "563492ad6f9170000100000187ea652f8a4848e8a02269c5f67d1611";

export const fetchPictures = () => async (dispatch, term) => {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search/?query=${term}&per_page=30`,
      {
        method: "GET",
        headers: { Accept: "application/json", Authorization: API_KEY },
      }
    );
    const data = await response.json();
    dispatch({ type: FETCH, payload: data.photos });
  } catch (err) {
    console.log(err);
  }
};
