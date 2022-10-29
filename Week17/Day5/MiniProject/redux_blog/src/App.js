import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:post_id" element={<Post />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
