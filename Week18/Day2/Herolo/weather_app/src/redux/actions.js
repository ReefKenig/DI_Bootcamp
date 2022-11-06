const API_KEY = "abtrETkKP8Qftt5PGyhGC5gZ1fhux0Z4";
const ACCUWEATHER_URL = "http://dataservice.accuweather.com/";
const AUTOCOMPLETE_URL = "locations/v1/cities/autocomplete";
const CURRENT_FORECAST_URL = "forecasts/v1/daily/1day";
const FUTURE_FORECAST_URL = "forecasts/v1/daily/5day";

export const AUTOCOMPLETE = "AUTOCOMPLETE";
export const autocomplete = (text) => async (dispatch) => {
  try {
    const response = await fetch(
      `${ACCUWEATHER_URL}${AUTOCOMPLETE_URL}?apikey=${API_KEY}&q=${text}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
      }
    );
    const data = await response.json();
    dispatch({ type: AUTOCOMPLETE, payload: data });
  } catch (err) {
    console.log("An error occured...\n", err);
  }
};

export const CURRENT_FORECAST = "CURRENT_FORECAST";
export const get_current_forecast = (city_id) => async (dispatch) => {
  try {
    const response = await fetch(
      `${ACCUWEATHER_URL}${CURRENT_FORECAST_URL}/${city_id}?apikey=${API_KEY}&metric=true`,
      { method: "GET", headers: { Accept: "application/json" } }
    );
    const data = await response.json();
    dispatch({ type: CURRENT_FORECAST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const FUTURE_FORECAST = "FUTURE_FORECAST";
export const get_future_forecast = (city_id) => async (dispatch) => {
  try {
    const response = await fetch(
      `${ACCUWEATHER_URL}${FUTURE_FORECAST_URL}/${city_id}?apikey=${API_KEY}&metric=true`,
      { method: "GET", headers: { Accept: "application/json" } }
    );
    const data = await response.json();
    dispatch({ type: FUTURE_FORECAST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const ADD_FAVORITE = "ADD_FAVORITE";
export const add_to_favorites = (city_id) => {
  return { type: ADD_FAVORITE, payload: city_id };
};

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const remove_form_favorites = (city_id) => {
  return { type: REMOVE_FAVORITE, payload: city_id };
};
