import React from "react";

import "../../styles/date.scss";

class Date extends React.Component {
  render() {
    let options = {
      // weekday: "long",
      // year: "numeric",
      month: "long",
      day: "numeric"
    };

    var date = new Intl.DateTimeFormat("en-US", options).format(date);

    return (
      <div className="date">
        <div className="dateTime">Today, {date}</div>
      </div>
    );
  }
}

export default Date;
