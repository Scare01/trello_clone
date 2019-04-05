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

  closeForm = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let iconName = this.state.isOpen ? "close" : "plus";
    let AddList = this.state.isOpen ? (
      <AddListForm board={this.props.board} closeForm={this.closeForm} />
    ) : null;

    return (
      <div id="addForm">
        {AddList}
        <Button id="addListButton" icon onClick={this.clickListButton}>
          <Icon name={iconName} />
        </Button>
      </div>
    );
  }
}
