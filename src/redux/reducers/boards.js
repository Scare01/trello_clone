import {
  ADD_BOARD,
  DELETE_BOARD,
  EDIT_BOARD,
  ADD_LIST,
  DELETE_LIST,
  ADD_TASK,
  COMPLETE_TASK
} from "../constants/actionTypes";

let boards = (state = [], action) => {
  switch (action.type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          lists: []
        }
      ];
    case EDIT_BOARD:
      return state.map(board => {
        if (board.id === action.id) {
          return Object.assign({}, board, {
            ...board,
            name: action.name
          });
        }
        return board;
      });
    case DELETE_BOARD:
      return state.filter(board => board.id !== action.id);
    case ADD_LIST:
      return state.map(board => {
        if (board.id === action.boardId) {
          return Object.assign({}, board, {
            ...board,
            lists: [
              ...board.lists,
              {
                id: action.id,
                name: action.name,
                tasks: []
              }
            ]
          });
        }
        return board;
      });
      case DELETE_LIST:
      return state.map(board => {
        if (board.id === action.boardId) {
          return Object.assign({}, board, {
            ...board,
            lists: [
              ...board.lists.filter(list => list.id !== action.id)
            ]
          })
        }
        return board;
      });
      case ADD_TASK:  
        let boardsObj = [...state]
        let { newBoards } = boardsObj.map(board => {
          if (board.id === action.boardId) {
            board.lists.map(list => {
              if(list.id === action.listId) {
                list.tasks.push(
                  {
                  id: action.id,
                  name: action.name,
                  completed: false,
                  parentId: action.listId
                  }
                )
              }
              return list;
            })
          
          }
          return board;
        })

        return state.map(board => {
          return Object.assign({}, board, {
            ...newBoards
          })
        })
      case COMPLETE_TASK: 
        let boarObj = [...state];
        let { newBoard } = boarObj.map(board => {
          if(board.id === action.boardId) {
            board.lists.map(list => {
              if(list.id === action.listId) {
                list.tasks.map(task => {

                  if(task.id === action.taskId) {
                    task.completed = !task.completed
                  }
                  return task;
                })
              }
              return list;
            })
          }
          return board;
        })
        
        return state.map(board => {
          return Object.assign({}, board, {
            ...newBoard
          })
        })

      default:
        return state;
  }
};

export default boards;
