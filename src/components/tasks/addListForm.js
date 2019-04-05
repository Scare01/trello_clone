import React from "react";
import { Form, Button } from "semantic-ui-react";
import { addList } from "../../redux/actions/actions";
import { connect } from "react-redux";

let mapDispatchToProps = dispatch => {
  return {
    addList: (boardId, name) => dispatch(addList(boardId, name))
  };
};

class AddListFormClass extends React.Component {
  state = {
    name: ""
  };

  addList = () => {
    this.props.addList(this.props.board.id, this.state.name);
    this.props.closeForm();
  };

  render() {
    return (
      <Form id="addListForm" onSubmit={this.addList}>
        <Form.Input
          type="text"
          label="List name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <Button type="submit" disabled={!this.state.name}>
          Add
        </Button>
      </Form>
    );
  }
}

let AddListForm = connect(
  null,
  mapDispatchToProps
)(AddListFormClass);

export default AddListForm;
