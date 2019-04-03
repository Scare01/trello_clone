import React from "react";

export default class OneBoard extends React.Component {
  render() {
    let { board } = this.props.location.state; // load passing though Link data

    return (
      <div>
        <h1>{board.name}</h1>
      </div>
    );
  }
}
