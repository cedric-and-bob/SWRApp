import React from "react";

import "../../styles/altDate.scss";

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
        <h1 className="dateTime">Today is {date} </h1>
      </div>
    );
  }
}

export default Date;
