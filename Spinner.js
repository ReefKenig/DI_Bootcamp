import spinner from "../assets/loading-gif.gif";

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt="loading spinner" id="loading-gif" />
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
