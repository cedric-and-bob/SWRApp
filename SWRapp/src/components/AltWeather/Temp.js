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
          <span className="deg">{Fahrenheit(temp)}&deg;F</span> <br></br>{" "}
          {Celsius(temp)}
          <span className="deg">&deg;C</span>
        </div>
        <p className="outside">Outside</p>
      </div>
    );
  }
}

export default Temp;
