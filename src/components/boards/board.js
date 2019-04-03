import React from "react";

export default class OneBoard extends React.Component {
  render() {
    console.log(this.props.board);
    return (
      <div>
        <h1>Board</h1>
      </div>
    );
  }
}
