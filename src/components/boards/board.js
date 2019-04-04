import React from "react";
import { Header } from "semantic-ui-react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AddList from "../tasks/addList";

let mapStateToProps = state => ({
  boards: state.boards
});

class OneBoardClass extends React.Component {
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
        <BoardLists />
        <AddList boardId={board.id} />
      </div>
    );
  }
}

let OneBoard = connect(
  null,
  mapStateToProps
)(OneBoardClass);

export default OneBoard;
