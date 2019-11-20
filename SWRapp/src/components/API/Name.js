import React from "react";

import "../../styles/name.scss";

class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { city, country } = this.props;
    return (
      <div>
        <div className="location">{`${city}, ${country}`}</div>
      </div>
    );
  }
}

export default Name;
