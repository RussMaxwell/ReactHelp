import React from "react";
import { Link } from "react-router-dom";
import "../styles/hello.css";

const Landing = () => {
  return (
    <div className="mystyle">
      <h1>Landing Page</h1>
      <Link className="mypad" to="/about">
        About
      </Link>
      <Link className="mypad" to="/contact">
        Contact
      </Link>
      <Link className="mypad" to="/products">
        Products
      </Link>
    </div>
  );
};

export default Landing;
