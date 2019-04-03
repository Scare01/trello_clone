import React from "react";
import { Header } from "semantic-ui-react";

import { Redirect } from "react-router-dom";
//import { connect } from "react-redux";

class OneBoard extends React.Component {
  state = {
    deleted: false
  };

  render() {
    if (this.props.deleted) return <Redirect to="/" />;
    let { board } = this.props.location.state; // load passing though Link data

    return (
      <div id="board">
        <Header id="boardHeader" as="h1">
          {board.name}
        </Header>
      </div>
    );
  }
}

export default OneBoard;
