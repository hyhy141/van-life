import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="..">
        <button className="btn">Return to home</button>
      </Link>
    </section>
  );
};

export default NotFound;
