import React from "react";
import { geolocated } from "react-geolocated";
import useSWR, { SWRConfig } from "swr";

import GeoLoc from "../WeatherGeoBody/index";

import "../../styles/styles.css";

import "../../styles/weatherBody.scss";

class WeatherBody extends React.Component {
  render() {
    return (
      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateOnFocus: false
        }}
      >
        <div className="weatherBody">
          <GeoLoc {...this.props} />
        </div>
      </SWRConfig>
    );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(WeatherBody);
