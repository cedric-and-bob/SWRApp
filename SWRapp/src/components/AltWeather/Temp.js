import React from "react";

import "../../styles/temp.scss";

class Temp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { temp } = this.props;

    function Celsius(temp) {
      return parseFloat(temp).toFixed(1);
    }

    function Fahrenheit(temp) {
      return parseFloat(temp * 1.8 + 32).toFixed(1);
    }

    return (
      <div>
        <div className="temperature">
          <h2>
            <span className="deg">
              {Fahrenheit(temp)}
              <sup>&deg;F</sup>
            </span>
            /{Celsius(temp)}
            <span className="deg">
              <sup>&deg;C</sup>
            </span>{" "}
            Outside
          </h2>
        </div>
      </div>
    );
  }
}

export default Temp;
