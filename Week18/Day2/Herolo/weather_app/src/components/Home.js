import SearchForm from "./SearchForm";
import FutureWeather from "./FutureWeather";

const Home = () => {
  return (
    <>
      <h1>Weather App</h1>
      <SearchForm />
      <FutureWeather city_name="ABC" city_id={123} />
    </>
  );
};

export default Home;
