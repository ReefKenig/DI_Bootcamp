import { connect } from "react-redux";

const AutoCities = (props) => {
  const handleClick = (key) => {};

  const content = props.cities ? (
    <ul>
      {props.cities.map((city, index) => {
        return (
          <li key={index} onClick={() => handleClick(city.Key)}>
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
