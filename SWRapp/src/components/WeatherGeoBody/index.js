import React from "react";
import useSWR from "swr";

import Name from "../API/Name";
import Date from "../API/Date";
import Temp from "../API/Temp";

import "../../styles/styles.css";

import "../../styles/weatherBody.scss";

const fetcher = url => fetch(url).then(r => r.json(), console.log(url));
const x =
  // parseFloat(this.props.coords && this.props.coords.latitude).toFixed(2);
  parseFloat(35.02).toFixed(2);

const y =
  // parseFloat(this.props.coords && this.props.coords.longitude).toFixed(2);

  parseFloat(139.01).toFixed(2);

function Geoloc(props) {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = props;

  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=b6907d289e10d714a6e88b30761fae22/main`,
    fetcher
  );

  if (error) return <div>{error}</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div className="weatherBody">
      <Name city={data.name} country={data.sys.country} />
      <Temp temp={data.main.temp} />
      <Date />
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}

export default Geoloc;
