import React from "react";

class Date extends React.Component {
  render() {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var today = new Date();
    return (
      <div>
        <div>{today.toLocaleDateString("en-US", options)}</div>
      </div>
    );
  }
}

export default Date;
