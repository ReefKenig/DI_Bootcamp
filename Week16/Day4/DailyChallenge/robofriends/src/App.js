import "./App.css";

function App() {
  return (
    <div className="App">
      <link
        href="http://fonts.cdnfonts.com/css/sega-logo-font"
        rel="stylesheet"
      />
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">ROBOFRIENDS</a>
          <div className="form-outline">
            <input
              type="text"
              id="form1"
              onkeyup="searchRobots()"
              placeholder="Search Robots"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
