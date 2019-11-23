import React from "react";

import { Header } from "./components/Header/index";

import { Route, Switch } from "react-router-dom";

import { WeatherPageView } from "./views/index";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
      </div>
      <Switch>
        <Route exact path="/weather" render={() => <WeatherPageView />} />
        {/* <Route exact path="/" render={() => <WeatherPageView />} />
        <Route exact path="/" render={() => <WeatherPageView />} />
        <Route exact path="/" render={() => <WeatherPageView />} /> */}
      </Switch>
    </div>
  );
}

export default App;
