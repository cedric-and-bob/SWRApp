import React from "react";

class Date extends React.Component {
  render() {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    let actualToday = Intl.DateTimeFormat("en-US", options);

    return (
      <div>
        <div>{actualToday}</div>
      </div>
    );
  }
}

export default Date;
