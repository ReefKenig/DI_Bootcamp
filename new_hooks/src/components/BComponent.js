import { AppContext } from "../App";
import { useContext } from "react";

const BComponent = (props) => {
  const { text } = useContext(AppContext);
  return (
    <>
      <h3>{text}</h3>
    </>
  );
};

export default BComponent;
