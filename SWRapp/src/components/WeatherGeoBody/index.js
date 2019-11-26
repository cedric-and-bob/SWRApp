import React from "react";
import useSWR from "swr";

import Name from "../WeatherAPI/Name";
import Date from "../WeatherAPI/Date";
import Temp from "../WeatherAPI/Temp";

import "../../styles/styles.css";

import "../../styles/weatherBody.scss";

const fetcher = url =>
  fetch(url).then(r => r.json(), console.log("Data was just recently fetched"));

function Geoloc(props) {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = props;

  const x = parseFloat(coords && coords.latitude).toFixed(8);

  const y = parseFloat(coords && coords.longitude).toFixed(8);

  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=12fd24ad521f5a05403f2e20fa834f59`,
    // `https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22`,
    fetcher
  );

  if (error) return <div>{error.msg}</div>;
  if (!data) return <div>loading...</div>;

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div className="body">
      <Name city={data.name} country={data.sys.country} />
      <Date />
      <Temp temp={data.main.temp} />
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}

export default Geoloc;
