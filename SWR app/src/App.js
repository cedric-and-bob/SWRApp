import React from "react";

import { Header } from "./components/Header/index";

import WeatherBody from "./components/WeatherBody/index";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
      </div>
      <WeatherBody />
    </div>
  );
}

export default App;
