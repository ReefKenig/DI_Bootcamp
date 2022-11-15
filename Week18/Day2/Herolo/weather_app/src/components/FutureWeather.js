import { connect } from "react-redux";
import { get_future_forecast } from "../redux/actions";

const FutureWeather = (props) => {
  const city_id = props.city_id;
  const city_name = props.city_name;
  const weather = props.forecast(city_id);

  return (
    <>
      <h2>{city_name}</h2>
      <div className="row row-cols-1">
        {weather.DailyForecasts.map((forecast, index) => {
          const date = forecast.Date.slice(0, forecast.Date.indexOf("T"));
          const temp = forecast.Temperature.Maximum.Value;
          return (
            <div key={index} className="col mb-3 ml-4 mr-4">
              <div className="card card-body bg-white text-center h-100 ">
                <h3 className="card-title">{date}</h3>
                <h4>{temp}&deg;C</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { forecast: (city_id) => dispatch(get_future_forecast(city_id)) };
};

export default connect(null, mapDispatchToProps)(FutureWeather);
