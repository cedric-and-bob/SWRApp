import React from "react";
import useSWR from "swr";
import { geolocated } from "react-geolocated";

import Name from "../API/Name";
import Date from "../API/Date";
import Temp from "../API/Temp";

import "../../styles/styles.css";

import "../../styles/weatherBody.scss";

class WeatherBody extends React.Component {
  render() {
    return <div className="weatherBody"></div>;
  }
}
const WeatherBodywithGeoLoc = geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 100000
})(WeatherBody);

export default WeatherBodywithGeoLoc;
