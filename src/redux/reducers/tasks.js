import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "../constants/actionTypes";

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
    default:
      return task;
  }
};

export default tasks;
