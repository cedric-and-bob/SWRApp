import React, { Component } from "react";

import Location from "./Location";
import Temp from "./Temp";

class Stations extends Component {
  render() {
    console.log("this.props.data", this.props.data);
    const { city, state, observation } = this.props.data;

    return (
      <div className="stations">
        <Location city={city} state={state} />
        <Temp temp={observation[0].temperature} />
      </div>
    );
  }
}

export default Stations;
