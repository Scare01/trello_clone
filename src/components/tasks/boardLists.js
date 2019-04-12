import React from "react";
import OneList from "./list";

import { deleteList } from '../../redux/actions/actions';
import { connect } from "react-redux";


let mapStateToProps = state => ({
  boards: state.boards
});

let mapDispatchToProps = dispatch => {
  return {
    clickDeleteList: (boardId, listId) => dispatch(deleteList(boardId,listId))
  };
};


let BoardListsObj = ({ boards, boardFromBoard, clickDeleteList }) =>
  boards.map(board =>
    board.id === boardFromBoard.id
      ? board.lists.length
        ? board.lists.map(list => <OneList list={list} key={list.id}    clickDeleteList={() => clickDeleteList(board.id, list.id)} />)
        : null
      : null
  );

let BoardLists = connect(mapStateToProps, mapDispatchToProps)(BoardListsObj);

export default BoardLists;
