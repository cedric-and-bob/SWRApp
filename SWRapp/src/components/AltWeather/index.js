import React from "react";
import { geolocated } from "react-geolocated";
import useSWR, { SWRConfig } from "swr";

import StationsGeoLoc from "../AltWeather/StationsGeoLoc";

import "../../styles/altWeather.scss";

class AltWeather extends React.Component {
  render() {
    console.log(this.props);
    return (
      <SWRConfig
        value={{
          refreshInterval: 60000,
          revalidateOnFocus: false
        }}
      >
        <div className="altWeatherBody">
          <StationsGeoLoc {...this.props} />
        </div>
      </SWRConfig>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 15000
})(AltWeather);
