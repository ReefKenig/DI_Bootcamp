import React from "react";
import "./Exercise4.css";

const Exercise4 = () => {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <>
      <h1 style={style_header}>This is a header</h1>
      <p class="para">This is a paragraph</p>
      <a>This is a link</a>
      <form>
        This is a form:
        <input type="text" placeholder="Enter your name" />
        <input type="submit" value="Submit" />
      </form>
      <img src="https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png"></img>
      <ul>
        This is a list
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </>
  );
};

export default Exercise4;
