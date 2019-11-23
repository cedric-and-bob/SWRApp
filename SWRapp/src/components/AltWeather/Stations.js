import React, { Component } from "react";

import Location from "./Location";
import Temp from "./Temp";

import { useParams } from "react-router-dom";

class Stations extends Component {
  render() {
    let { stationId } = useParams();
    const { city, state, temp } = this.props;

    return (
      <div className="stations">
        <Location city={city} state={state} />
        <Temp temp={temp} />
        {stationId}
      </div>
    );
  }
}

export default Stations;
