import React from "react";

import { Header } from "./components/Header/index";

import { Route, Switch } from "react-router-dom";

import {
  WeatherPageView,
  WeatherPageAlt,
  LandingPageView
} from "./views/index";

import "./styles/styles.css";

function App({ props }) {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
      </div>
      <Switch>
        <Route exact path="/weather" render={() => <WeatherPageView />} />
        <Route exact path="/weather-alt" render={() => <WeatherPageAlt />} />
        {/* <Route exact path="/" render={() => <LandingPageView />} /> */}
        {/* <Route exact path="/" render={() => <WeatherPageView />} /> */}
      </Switch>
    </div>
  );
}

export default App;
