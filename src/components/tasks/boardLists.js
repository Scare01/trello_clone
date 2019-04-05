import React from "react";
import OneList from "./list";

export default class BoardLists extends React.Component {
  render() {
    let board = this.props.board;

    let List = board.lists.length
      ? board.lists.map(list => <OneList list={list} key={list.id} />)
      : null;

    return <div>{List}</div>;
  }
}
