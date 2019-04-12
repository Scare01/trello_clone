import React from "react";
import { Header } from "semantic-ui-react";

import { Redirect } from "react-router-dom";

import AddList from "../tasks/addList";
import BoardLists from "../tasks/boardLists";

class OneBoard extends React.Component {
  state = {
    board: "",
    deleted: false
  };

  render() {
    if (this.props.deleted) return <Redirect to="/" />;
    let { board } = this.props.location.state; // load passing though Link data

    return (
      <div>
        <Header id="boardHeader" as="h1">
          {board.name}
        </Header>

        <div className="boards">
          
          <BoardLists boardFromBoard={board} />
        </div>
        <AddList board={board} />
      </div>
    );
  }
}

export default OneBoard;
