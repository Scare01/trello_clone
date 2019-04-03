import React from "react";
import { deleteBoard, editBoard } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

let mapStateToProps = state => ({
  boards: state.boards
});

let mapDispatchToProps = dispatch => {
  return {
    clickDelete: id => dispatch(deleteBoard(id)),
    clickEdit: id => dispatch(editBoard(id))
  };
};

let List = ({ boards }) =>
  boards.map(board => {
    let linkToBoard = "/board/" + board.name + "/";
    return (
      <Link
        key={board.id}
        to={linkToBoard}
        params={{ board: board }}
        //  clickDelete={clickDelete}
        //  clickEdit={clickEdit}
        className="ui  button"
        id="Board"
        board={board}
      >
        {board.name}
      </Link>
    );
  });

let BoardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default BoardList;
