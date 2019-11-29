import React from "react";

import { Link } from "react-router-dom";

import "../../styles/styles.css";

export const Header = props => {
  return (
    <header className="header">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/weather" className="link">
        Weather
      </Link>
      <Link to="/weather-alt" className="link">
        Weather Alt Page
      </Link>
      <Link to="/" className="link">
        Traffic
        <sup>
          {" "}
          <em>Coming Soon</em>
        </sup>
      </Link>
      <Link to="/" className="link">
        Food
        <sup>
          {" "}
          <em>Coming Soon</em>
        </sup>
      </Link>
    </header>
  );
};
