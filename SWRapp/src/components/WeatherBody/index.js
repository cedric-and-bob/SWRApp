import React from "react";
import { geolocated } from "react-geolocated";

import GeoLoc from "../WeatherGeoBody/index";

import "../../styles/styles.css";

import "../../styles/weatherBody.scss";

class WeatherBody extends React.Component {
  render() {
    return (
      <div className="weatherBody">
        <GeoLoc {...this.props} />
      </div>
    );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(WeatherBody);
