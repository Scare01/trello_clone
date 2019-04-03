import React from "react";
import { deleteBoard } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

let mapDispatchToProps = dispatch => {
  return {
    clickDelete: id => dispatch(deleteBoard(id))
  };
};

let mapStateToProps = state => ({
  boards: state.boards
});

let List = ({ boards, clickDelete }) =>
  boards.map(board => {
    return (
      <div id="Board">
        <Link
          key={board.id}
          to={{
            pathname: "/board/" + board.name,
            // this state passing props through Link
            state: {
              board: board
            }
          }}
          className="ui  button"
          board={board}
          id="boardLink"
        >
          {board.name}
        </Link>
        <div id="breakLine" />
        <Button icon id="boardTrash" onClick={() => clickDelete(board.id)}>
          <Icon name="trash" />
        </Button>
      </div>
    );
  });

let BoardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default BoardList;
