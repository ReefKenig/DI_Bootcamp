import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchPictures } from "../redux/actions";

const API_KEY = "563492ad6f9170000100000187ea652f8a4848e8a02269c5f67d1611";

const Searchbar = props => {
  const [termState, setTerm] = useState([]);
  const [picturesState, setPictures] = useState([]);

  const handleChange = e => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => props.fetchImages(termState)}>Search</button>
      <br />
      <a
        href="#"
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Star Wars")}
      >
        Star Wars
      </a>
      <a
        href="#"
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Sonic the Hedgehog")}
      >
        Sonic the Hedgehog
      </a>
      <a
        href="#"
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Demon Slayer")}
      >
        Demon Slayer
      </a>
      <a
        href="#"
        style={{ paddingRight: "10px" }}
        onClick={() => props.fetchImages("Ace Attorney")}
      >
        Ace Attorney
      </a>
    </div>
  );
};

const mapStateToProps = state => {
  return { pictures: state.pictures };
};

const mapDispatchToProps = dispatch => {
  return { fetchImages: term => dispatch(fetchPictures(term)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
