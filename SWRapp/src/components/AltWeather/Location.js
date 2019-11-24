import React from "react";

import "../../styles/location.scss";

class location extends React.Component {
  render() {
    const { city, state } = this.props;
    return (
      <div className="location">
        <h2 className="place">
          And in {city}, {state} it is
        </h2>
      </div>
    );
  }
}

export default location;
