const Footer = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="footer p-3 mt-4 text-center bg-dark text-light">
          Using <i className="fab fa-react" id="react-logo" /> React JS &amp; Redux JS integrated with external movies data API
          <a
            href="http://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="imdb-logo"
          >
            OMDB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
