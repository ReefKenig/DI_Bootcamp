import { connect } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";

const AutoCities = (props) => {
  const handleClick = (key, name) => {
    return (
      <>
        <CurrentWeather city_id={key} city_name={name} />
        <FutureWeather city_id={key} city_name={name} />
      </>
    );
  };

  const content = props.cities ? (
    <ul>
      {props.cities.map((city, index) => {
        return (
          <li
            key={index}
            onClick={() => handleClick(city.Key, city.LocalizedName)}
          >
            {city.LocalizedName}, {city.Country.LocalizedName}
          </li>
        );
      })}
    </ul>
  ) : (
    <div></div>
  );

  return <>{content}</>;
};

const mapStateToProps = (state) => {
  return { cities: state.cities };
};

export default connect(mapStateToProps)(AutoCities);
