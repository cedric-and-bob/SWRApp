import React from "react";

class Date extends React.Component {
  render() {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var date = new Date();

    let actualToday = date.DateTimeFormat("en-US", options);

    return (
      <div>
        <div>{actualToday}</div>
      </div>
    );
  }
}

export default Date;
