import React from "react";

import { Link } from "react-router-dom";

import "../../styles/styles.css";

export const Header = props => {
  return (
    <header className="header">
      <Link to="/weather" className="link">
        Weather
      </Link>
      <Link to="/Traffic" className="link">
        Traffic
        <sup>
          {" "}
          <em>Coming Soon</em>
        </sup>
      </Link>
      <Link to="/Gas" className="link">
        Gas
        <sup>
          {" "}
          <em>Coming Soon</em>
        </sup>
      </Link>
      <Link to="/Food" className="link">
        Food
        <sup>
          {" "}
          <em>Coming Soon</em>
        </sup>
      </Link>
    </header>
  );
};
