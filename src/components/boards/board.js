import React from "react";

export default class OneBoard extends React.Component {
  render() {
    let { board } = this.props.location.state;

    return (
      <div>
        <h1>{board.name}</h1>
      </div>
    );
  }
}
