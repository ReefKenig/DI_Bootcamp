import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      {props.loading ? <Spinner /> : null}
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return { loading: state.loading };
};

export default connect(mapStateToProps)(App);
