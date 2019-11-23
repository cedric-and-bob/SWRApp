import React from "react";
import useSWR from "swr";

import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Date from "./Date";

import Stations from "./Stations";

import "../../styles/altWeather.scss";

const fetcher = url => fetch(url).then(r => r.json(), console.log(url));

/*
The block of code below is how I can display "sub data within a city"
*/
// function Resource({ match }) {
//   const topic = topics
//     .find(({ id }) => id === match.params.topicId)
//     .resources.find(({ id }) => id === match.params.subId);

//   return (
//     <div>
//       <h3>{topic.name}</h3>
//       <p>{topic.description}</p>
//       <a href={topic.url}>More info.</a>
//     </div>
//   );
// }

function StationsGeoLoc() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;
  const { match } = this.props;
  const x = parseFloat(coords && coords.latitude);

  const y = parseFloat(coords && coords.longitude);
  const { data, error, isValidating } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?app_id=XazvXcdU6KPksgGtKdGZ&app_code=fsP8Cgo6_w6f3TBvpOu-ug&product=observation&latitude=${x}&longitude=${y}`,
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
    <div className="altBody">
      <div className="banner">
        <p>This data is less than a minute old</p>
      </div>

      <Switch>
        <Route exact path="/weather-alt">
          <h2>Please choose a city below</h2>
        </Route>
        <Route path={`/weather-alt/:stationId`}>
          <Date />
        </Route>
      </Switch>
      {data.observations.location.map((station, idx) => (
        <li key={idx}>
          <NavLink to={`/${match.url}/${idx}`}>{station.city}</NavLink>
        </li>
      ))}
      <Route path={`${match.path}/:stationId`} component={StationsComponent} />
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );

  function StationsComponent({ match }) {
    const altWeatherState = data.observations.location.map((station, idx) => (
      <Stations
        city={station.city}
        state={station.state}
        temp={station.observation[0].temperature}
        key={idx}
      />
    ));
    const station = altWeatherState.find(
      ({ id }) => id === match.params.stationId
    );

    return (
      <div>
        <h2>{station.city}</h2>
        <p>{station.state}</p>

        {/* 
          This bit of code will be useful incase I ever want to display data WITHIN a particular cities displayed component, such as weather warnings, pictures, etcetera.
    
          <ul>
            {topic.resources.map(sub => (
              <li key={sub.id}>
                <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
              </li>
            ))}
          </ul> 
    
          <hr />
    
          <Route path={`${match.path}/:subId`} component={Resource} />*/}
      </div>
    );
  }
}

export default StationsGeoLoc;
