import React from "react";
import useSWR from "swr";

import Name from "../API/Name";
import Date from "../API/Date";
import Temp from "../API/Temp";

import "../../styles/styles.css";

import "../../styles/weatherBody.scss";

const fetcher = url => fetch(url).then(r => r.json(), console.log(url));

function Geoloc(props) {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = props;
  const x = parseFloat(coords && coords.latitude).toFixed(2);

  const y = parseFloat(coords && coords.longitude).toFixed(2);
  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=12fd24ad521f5a05403f2e20fa834f59`,
    fetcher
  );

  if (error) return <div>{error.msg}</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div className="weatherBody">
      <Name city={data.name} country={data.sys.country} />
      <Date />
      <Temp temp={data.main.temp} />
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}

export default Geoloc;
