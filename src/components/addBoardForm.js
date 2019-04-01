import React from "react";
import { Form, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class AddBoardForm extends React.Component {
  state = {
    name: ""
  };

  render() {
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

          <Button type="submit" color="white">
            Create
          </Button>
        </Form>
      </div>
    );
  }
}
