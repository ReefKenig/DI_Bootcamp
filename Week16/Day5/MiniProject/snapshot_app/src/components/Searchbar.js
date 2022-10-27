import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchPictures } from "../redux/actions";

const Searchbar = (props) => {
  const [termState, setTerm] = useState([]);

  return (
    <div>
      <input type="text" onChange={(e) => setTerm(e.target.value)} />
      <button onClick={() => props.fetchImages(termState)}>Search</button>
      <br />
      <button
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Star Wars")}
      >
        Star Wars
      </button>
      <button
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Sonic the Hedgehog")}
      >
        Sonic the Hedgehog
      </button>
      <button
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Demon Slayer")}
      >
        Demon Slayer
      </button>
      <button
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Ace Attorney")}
      >
        Ace Attorney
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { fetchImages: (term) => dispatch(fetchPictures(term)) };
};

export default connect(null, mapDispatchToProps)(Searchbar);
