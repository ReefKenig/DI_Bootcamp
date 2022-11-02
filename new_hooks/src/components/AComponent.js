import { useContext } from "react";
import { AppContext } from "../App";
import BComponent from "./BComponent";

const AComponent = (props) => {
  const { text, setText } = useContext(AppContext);
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <BComponent />
    </>
  );
};

export default AComponent;
