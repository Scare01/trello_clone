import {
  ADD_BOARD,
  DELETE_BOARD,
  EDIT_BOARD,
  //ADD_TASK,
  // DELETE_TASK,
  // COMPLETE_TASK,
  ADD_LIST,
  DELETE_LIST
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

export const addList = (boardId, name) => ({
  type: ADD_LIST,
  id: v4(),
  boardId,
  name
});

export const deleteList = id => ({
  type: DELETE_LIST,
  id
});
