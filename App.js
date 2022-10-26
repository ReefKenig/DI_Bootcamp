import Searchbar from "./components/Searchbar";
import Picture from "./components/Picture";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Searchbar />
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default App;
// export default connect(mapStateToProps)(App);
