import React from "react";
import { Button, Header, Icon } from 'semantic-ui-react';

import AddTask from './addTask';


// can add in input boardId

let OneList = ({ list, clickDeleteList }) => (
  <div className="List">
    <Header as='h2' textAlign='center' className="headerList">
      {list.name}
      <Button onClick={clickDeleteList} icon id="delelteListButton" >
        <Icon name='trash' size='tiny'/>
      </Button>
    </Header>
    <AddTask />
  </div>
);

export default OneList;
