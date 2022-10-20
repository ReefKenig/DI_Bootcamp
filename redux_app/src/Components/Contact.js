import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Contact = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <>
      <h1>Contact</h1>
      <h2>{params.me}</h2>
      <Link to="/about">to About page</Link>
    </>
  );
};

export default Contact;
