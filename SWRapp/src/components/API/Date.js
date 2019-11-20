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

    let actualToday = Intl.DateTimeFormat("en-US", options).format(date);

    return (
      <div>
        <div>{actualToday}</div>
      </div>
    );
  }
}

export default Date;
