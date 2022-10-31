import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Movie from "./components/Movie";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Landing />} />
          <Route exact path="/movie/:id" component={<Movie />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return { loading: state.loading };
};

export default connect(mapStateToProps)(App);
