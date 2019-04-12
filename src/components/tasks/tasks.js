import React from 'react';

import { connect } from 'react-redux';


let mapStateToProps = state => ({
  boards: state.boards
});


let TasksObj = ({ boards, listId, boardId }) => (
  boards.map(board => 
    board.id === boardId ? (

      board.lists.length ? (
        board.lists.map(list => 
          list.id === listId ? (
            list.tasks.length ? (
              list.tasks.map(task => (
                <div>
                  {task.name}
                </div>
              ))
            ) : null
          ) : null
        )
      ) : null
    ) : null
  
  
  )
)  
  
let Tasks = connect(mapStateToProps)(TasksObj)

export default Tasks;