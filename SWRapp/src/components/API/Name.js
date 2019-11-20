import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { city, country } = this.props;
    return (
      <div>
        <div>{`${city}, ${country}`}</div>
      </div>
    );
  }
}

export default Name;
