import React from "react";
import { Form, Button } from "semantic-ui-react";
//import AddList from "./addList";

let mapStateToProps = state => ({
  boards: state.boards
});

export default class AddListForm extends React.Component {
  state = {
    name: ""
  };

  render() {
    console.log(this.props.boardId);
    return (
      <Form id="addListForm">
        <Form.Input
          type="text"
          label="List name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}
