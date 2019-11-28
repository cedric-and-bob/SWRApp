import React from "react";
import useSWR from "swr";

import { withRouter } from "react-router";

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

const UseHereAppId = process.env.REACT_APP_HERE_ID;
const UseHereAppKey = process.env.REACT_APP_HERE_KEY;

function StationsGeoLoc(props) {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = props;
  const { match, location, history } = props;
  console.log(props);
  const x = parseFloat(coords && coords.latitude);

  const y = parseFloat(coords && coords.longitude);
  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?app_id=${UseHereAppId}&app_code=${UseHereAppKey}&product=observation&latitude=${x}&longitude=${y}`,
    fetcher
  );

  if (error) return <div>{error.msg}</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  console.log(match);
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div className="altBody">
      <div className="banner"></div>
      {console.log("!!!!!", match.url)}
      <section className="subNavigation">
        <Route path="/weather-alt">
          <h2>Please choose a location below</h2>
          <sup>This data is less than a minute old</sup>
          <div className="cityLinks">
            {data.observations.location.map((station, idx) => (
              <li className="cityNameLi" key={idx}>
                <NavLink to={`${match.url}/${idx}`}>{station.city}</NavLink>
              </li>
            ))}
          </div>
        </Route>
      </section>
      <Route
        path={`${match.url}/:id`}
        render={props => {
          console.log(props);
          return (
            <>
              <Date {/* Gives acces to react router props*/ ...props} />
              <Stations
                data={data.observations.location[props.match.params.id]}
                {
                  /* Gives acces to react router props*/ ...props
                }
              />
            </>
          );
        }}
      />

      {/* Use this for Text only content <Route path="/weather-alt/:id" component={Stations} /> */}
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}
const StationsWithRouter = withRouter(StationsGeoLoc);
export default StationsWithRouter;
