import React from "react";
import OneList from "./list";

import { connect } from "react-redux";

let mapStateToProps = state => ({
  boards: state.boards
});

let BoardListsObj = ({ boards, boardFromBoard }) =>
  boards.map(board =>
    board.id === boardFromBoard.id
      ? board.lists.length
        ? board.lists.map(list => <OneList list={list} key={list.id} />)
        : null
      : null
  );

let BoardLists = connect(mapStateToProps)(BoardListsObj);

export default BoardLists;
