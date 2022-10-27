import Searchbar from "./components/Searchbar";
import Pictures from "./components/Pictures";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Searchbar />
      <Pictures />
    </div>
  );
}

export default App;
// export default connect(mapStateToProps)(App);
