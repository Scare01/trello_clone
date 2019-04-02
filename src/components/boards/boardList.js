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

let List = ({ boards, clickDelete, clickEdit }) =>
  boards.map(board => {
    let linkToBoard = "/board/" + board.name + "/";
    return (
      <Link
        to={linkToBoard}
        clickDelete={clickDelete}
        clickEdit={clickEdit}
        name={board.name}
        className="ui  button"
        id="Board"
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
