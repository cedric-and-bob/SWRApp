import React from "react";

class Temp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { temp } = this.props;
    return (
      <div>
        <div>{temp}</div>
      </div>
    );
  }
}

export default Temp;
