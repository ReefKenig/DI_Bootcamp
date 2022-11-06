import { connect } from "react-redux";
import { useState } from "react";
import {
  get_current_forecast,
  add_to_favorites,
  remove_form_favorites,
} from "../redux/actions";

const CurrentWeather = (props) => {
  const [is_fav, change_fav] = useState(false);

  const handleClick = () => {
    if (is_fav) {
      change_fav(false);
      props.remove(city_key);
    } else {
      change_fav(true);
      props.add(city_key);
    }
  };

  const city_key = Object.keys(props.city)[0];
  const city_name = Object.values(props.city)[0];
  const description = props.weather.Headline.Text;
  const minTemp = props.weather.DailyForecasts[0].Temperature.Minimum.Value;
  const maxTemp = props.weather.DailyForecasts[0].Temperature.Maximum.Value;
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-white text-center h-100">
        <h3 className="card-title">{city_name}</h3>
        <h4>
          {minTemp}&deg;C - {maxTemp}&deg;C
        </h4>
        <br />
        <p>{description}</p>
        <input
          type="button"
          onClick={handleClick}
          value={is_fav ? "Remove from favorites" : "Add to favorites"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    current_forecast: state.current_forecast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forecast: (city_id) => dispatch(get_current_forecast(city_id)),
    add: (city_id) => dispatch(add_to_favorites(city_id)),
    remove: (city_id) => dispatch(remove_form_favorites(city_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
