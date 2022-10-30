import { connect } from "react-redux";

const SearchForm = (props) => {
  const handleChange = () => {};

  return (
    <>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </>
  );
};

export default SearchForm;
