import React from "react";
import { Form, Button, Header, Icon } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { addBoard } from "../redux/actions/actions";
import { connect } from "react-redux";

let mapDispatchToProps = dispatch => {
  return {
    addBoard: name => dispatch(addBoard(name))
  };
};

class AddBoardFormClass extends React.Component {
  state = {
    name: "",
    isOpen: true
  };

  AddBoard = () => {
    this.props.addBoard(this.state.name);
    this.setState({ name: "", isOpen: false });
  };
  render() {
    if (!this.state.isOpen) return <Redirect to="/" />;
    return (
      <div id="addBoardForm">
        <div id="addBoardFormHead">
          <Header>Creating a board</Header>
          <Link to="/" class="ui  circular button icon" id="closeImg">
            <Icon name="cancel" />
          </Link>
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

          <Button type="submit" color="white" disabled={!this.state.name}>
            Create
          </Button>
        </Form>
      </div>
    );
  }
}

let AddBoardForm = connect(
  null,
  mapDispatchToProps
)(AddBoardFormClass);

export default AddBoardForm;
