import {ADD_LIST, DELETE_LIST} from '../constants/actionTypes';

let lists = (state=[], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        {
          id: action.id,
          name: action.name:
          tasks: []
        }
      ]
  }
}









let tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          completed: action.completed
        }
      ];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id);
    case COMPLETE_TASK:
      return state.map(task => {
        if (task.id === action.id) {
          return Object.assign({}, task, {
            ...task,
            completed: true
          });
        }
        return task;
      });