import React from "react";

class Date extends React.Component {
  render() {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let today = new Date();

    let actualToday = today.toLocaleDateString("en-US", options);

    return (
      <div>
        <div>{actualToday}</div>
      </div>
    );
  }
}

export default Date;
