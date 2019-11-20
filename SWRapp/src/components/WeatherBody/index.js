import React from "react";
import useSWR from "swr";

import Name from "../API/Name";
import Date from "../API/Date";
import Temp from "../API/Temp";

import "../../styles/styles.css";

import "../../styles/weatherBody.scss";

const fetcher = url => fetch(url).then(r => r.json());

function WeatherBody() {
  const { data, error } = useSWR(
    "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22",
    fetcher
  );

  if (error) return <div>{error}</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <div className="weatherBody">
      <Name city={data.name} country={data.sys.country} />
      <Temp temp={data.main.temp} />
      <Date />
    </div>
  );
}

export default WeatherBody;
