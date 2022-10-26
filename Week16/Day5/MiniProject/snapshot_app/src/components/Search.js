import React, { useEffect, useState } from "react";

const API_KEY = "563492ad6f9170000100000187ea652f8a4848e8a02269c5f67d1611";

const Search = () => {
  const [searchState, setSearch] = useState([]);
  const [imageData, setImage] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const fetchImages = async () => {
    const response = await fetch(
      `https://api.pexels.com/v1/search/?query=${searchState}&per_page=30`,
      {
        method: "GET",
        headers: { Accept: "application/json", Authorization: API_KEY },
      }
    );
    const data = await response.json();
    setImage(data.photos);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Try a new keyword :)"
        onChange={handleInput}
      />
      <button onClick={fetchImages}>Search</button>
    </>
  );
};

export default Search;
