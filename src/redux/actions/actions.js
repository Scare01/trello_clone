import {
  ADD_BOARD,
  DELETE_BOARD,
  EDIT_BOARD,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK
} from "../constants/actionTypes";
import v4 from "uuid";

export const addBoard = name => ({
  type: ADD_BOARD,
  id: v4(),
  name
});

export const deleteBoard = id => ({
  type: DELETE_BOARD,
  id
});

export const editBoard = (id, name) => ({
  type: EDIT_BOARD,
  id,
  name
});

export const addTask = name => ({
  type: ADD_TASK,
  id: v4(),
  name,
  completed: false
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id
});

export const completedTask = id => ({
  type: COMPLETE_TASK,
  id
});
