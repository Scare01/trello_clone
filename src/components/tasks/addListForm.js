import React from "react";
import { Form, Button } from "semantic-ui-react";
//import AddList from "./addList";

export default class AddListForm extends React.Component {
  state = {
    name: ""
  };

  render() {
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
