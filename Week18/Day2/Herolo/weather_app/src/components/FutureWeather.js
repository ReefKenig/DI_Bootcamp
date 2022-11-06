import { connect } from "react-redux";
import { get_future_forecast } from "../redux/actions";

const FutureWeather = (props) => {
  const city_id = props.city_id;
  const city_name = props.city_name;
  const weather = {
    Headline: {
      EffectiveDate: "2022-11-05T08:00:00+03:00",
      EffectiveEpochDate: 1667624400,
      Severity: 4,
      Text: "Pleasant this weekend",
      Category: "mild",
      EndDate: null,
      EndEpochDate: null,
      MobileLink:
        "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?unit=c&lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2022-11-03T07:00:00+03:00",
        EpochDate: 1667448000,
        Temperature: {
          Minimum: {
            Value: 9.3,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 26.5,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: "Sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: "Clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=1&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=1&unit=c&lang=en-us",
      },
      {
        Date: "2022-11-04T07:00:00+03:00",
        EpochDate: 1667534400,
        Temperature: {
          Minimum: {
            Value: 8.7,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 25.5,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: "Sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: "Clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=2&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=2&unit=c&lang=en-us",
      },
      {
        Date: "2022-11-05T07:00:00+03:00",
        EpochDate: 1667620800,
        Temperature: {
          Minimum: {
            Value: 8.4,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 24.6,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: "Sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: "Clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=3&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=3&unit=c&lang=en-us",
      },
      {
        Date: "2022-11-06T07:00:00+03:00",
        EpochDate: 1667707200,
        Temperature: {
          Minimum: {
            Value: 10.5,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 24.9,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: "Sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=4&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=4&unit=c&lang=en-us",
      },
      {
        Date: "2022-11-07T07:00:00+03:00",
        EpochDate: 1667793600,
        Temperature: {
          Minimum: {
            Value: 9.9,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 18,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 7,
          IconPhrase: "Cloudy",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=5&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/sy/jerablus/313422/daily-weather-forecast/313422?day=5&unit=c&lang=en-us",
      },
    ],
  };

  return (
    <>
      <h2>{city_name}</h2>
      <div className="row">
        {weather.DailyForecasts.map((forecast, index) => {
          return (
            <div className="col-md-2 mb-3">
              <div className="card card-body bg-white text-center h-100">
                <h3 className="card-title">{forecast.Date}</h3>
                <h4>{forecast.Temperature.Maximum.Value}&deg;C</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { forecast: (city_id) => dispatch(city_id) };
};

export default connect(null, mapDispatchToProps)(FutureWeather);
