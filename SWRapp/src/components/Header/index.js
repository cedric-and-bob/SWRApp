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
      <Link to="/traffic" className="link">
        Traffic
        <sup>
          {" "}
          <em>Coming Soon</em>
        </sup>
      </Link>
      <Link to="/good" className="link">
        Food
        <sup>
          {" "}
          <em>Coming Soon</em>
        </sup>
      </Link>
    </header>
  );
};
