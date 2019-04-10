import React from "react";
import { Header } from "semantic-ui-react";

import { Redirect } from "react-router-dom";
//import { connect } from "react-redux";

import AddList from "../tasks/addList";
import BoardLists from "../tasks/boardLists";

//let mapStateToProps = state => ({
//  boards: state.boards
//});

class OneBoard extends React.Component {
  state = {
    board: "",
    deleted: false
  };

  render() {
    if (this.props.deleted) return <Redirect to="/" />;
    let { board } = this.props.location.state; // load passing though Link data

    console.log(this.props.boards);

    return (
      <div id="board">
        <Header id="boardHeader" as="h1">
          {board.name}
        </Header>
        <BoardLists boardFromBoard={board} />
        <AddList board={board} />
      </div>
    );
  }
}

//let OneBoard = connect(
// null,
// mapStateToProps
//)(OneBoardClass);

export default OneBoard;
