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
import paramCase from "param-case";

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

function StationsGeoLoc(props) {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = props;
  const { match, location, history } = props;
  console.log(props);
  const x = parseFloat(coords && coords.latitude);

  const y = parseFloat(coords && coords.longitude);
  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?app_id=XazvXcdU6KPksgGtKdGZ&app_code=fsP8Cgo6_w6f3TBvpOu-ug&product=observation&latitude=${x}&longitude=${y}`,
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
      <div className="banner">
        <p>This data is less than a minute old</p>
      </div>
      {console.log("!!!!!", match.url)}

      <Route path="/weather-alt">
        <h2>Please choose a city below</h2>
      </Route>
      <Route
        path={`${match.url}/:id`}
        render={props => {
          console.log(props);
          return (
            <>
              <Stations
                data={data.observations.location[props.match.params.id]}
                {
                  /* Gives acces to react router props*/ ...props
                }
              />
              <Date {/* Gives acces to react router props*/ ...props} />
            </>
          );
        }}
      />

      {data.observations.location.map((station, idx) => (
        <li key={idx}>
          <NavLink to={`${match.url}/${idx}`}>{station.city}</NavLink>
        </li>
      ))}
      {/* Use this for Text only content <Route path="/weather-alt/:id" component={Stations} /> */}
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}
const StationsWithRouter = withRouter(StationsGeoLoc);
export default StationsWithRouter;
