import React from "react";
import { Button, Header, Icon } from 'semantic-ui-react';

import AddTask from './addTask';
import Tasks from './tasks';

import { addTask } from '../../redux/actions/actions';
import { connect } from "react-redux";


let mapDispatchToProps = dispatch => {
  return {
    addTaskToList: (boardId, listId, name) => dispatch(addTask(boardId,listId, name))
  };
};



let OneListObj = ({ list, clickDeleteList, boardId,  addTaskToList}) => (
  <div className="List">
    <Header as='h2' textAlign='center' className="headerList">
      {list.name}
      <Button onClick={clickDeleteList} icon id="delelteListButton" >
        <Icon name='trash' size='tiny'/>
      </Button>
    </Header>
    <AddTask addTaskToList={(name) => addTaskToList(boardId, list.id, name)} />
    <Tasks listId={list.id} boardId={boardId} />
  </div>
);

let OneList = connect(null, mapDispatchToProps)(OneListObj);

export default OneList;
