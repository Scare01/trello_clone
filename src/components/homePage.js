import React from "react";
import { addBoard } from "../redux/actions/actions";
import BoardList from "./boards/boardList";
import { Header, Icon, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";

let mapStateToProps = state => ({
  boards: state.boards
});

let mapDispatchToProps = dispatch => {
  return {
    addBoard: name => dispatch(addBoard(name))
  };
};

class HomePageClass extends React.Component {
  state = {
    name: "",
    isOpen: false,
    clickToBoard: false
  };

  clickCreate = () => {
    this.setState({
      isOpen: true
    });
  };

  closeForm = () => {
    this.setState({ isOpen: false });
  };

  AddBoard = () => {
    this.props.addBoard(this.state.name);
    this.setState({ name: "", isOpen: false });
  };

  render() {
    let createBoard = this.state.isOpen ? (
      <div id="addBoardForm">
        <div id="addBoardFormHead">
          <Header>Creating a board</Header>
          <div
            className="ui  circular button icon"
            id="closeImg"
            onClick={this.closeForm}
          >
            <Icon name="cancel" />
          </div>
        </div>
        <br />

        <Form onSubmit={this.AddBoard}>
          <div id="inputField">
            <Form.Input
              label="What shall we call the board?"
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>

          <Button type="submit" disabled={!this.state.name}>
            Create
          </Button>
        </Form>
      </div>
    ) : (
      <div className="ui  button" id="addBoard" onClick={this.clickCreate}>
        Creating a new board...
      </div>
    );
    return (
      <div>
        <div id="boards">
          {createBoard}
          <BoardList />
        </div>
      </div>
    );
  }
}

let HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageClass);

export default HomePage;
