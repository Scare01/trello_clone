import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';
import {completeTask} from '../../redux/actions/actions';


let mapStateToProps = state => ({
  boards: state.boards
});

let mapDispatchToProps = dispatch => {
  return {
    CompleteTask: (boardId, listId, taskId) => 
        dispatch(completeTask(boardId, listId, taskId))
  }
}


let TasksObj = ({ boards, listId, boardId, CompleteTask }) => (
  boards.map(board => 
    board.id === boardId ? (
      board.lists.length ? (
        board.lists.map(list => 
          list.id === listId ? (
            list.tasks.length ? (
              list.tasks.map(task => (
                <div key={task.id} className={ task.completed ? 'completedTask' : "task"}>
                  {task.name}
                <Button icon id="taskButton" onClick={() => CompleteTask(boardId, listId, task.id)}>
                  <Icon name="check" />
                </Button>
                </div>
              ))
            ) : null
          ) : null
        )
      ) : null
    ) : null
  
  
  )
)  
  
let Tasks = connect(mapStateToProps, mapDispatchToProps)(TasksObj)

export default Tasks;