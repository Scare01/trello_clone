import React from "react";
import { Button, Icon } from "semantic-ui-react";
import AddListForm from "./addListForm";

export default class AddList extends React.Component {
  state = {
    isOpen: false
  };

  clickListButton = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let iconName = this.state.isOpen ? "close" : "plus";
    let AddListForm = this.state.isOpen ? <AddListForm /> : null;

    return (
      <div id="addForm">
        {AddListForm}
        <Button id="addListButton" icon onClick={this.clickListButton}>
          <Icon name={iconName} />
        </Button>
      </div>
    );
  }
}
