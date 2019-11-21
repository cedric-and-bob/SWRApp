import React from "react";

import { Header } from "./components/Header/index";

import WeatherBodywithGeoLoc from "./components/WeatherBody/index";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
      </div>
      <WeatherBodywithGeoLoc />
      {/* Added a Comment */}
    </div>
  );
}

export default App;
