import { ADD_BOARD, DELETE_BOARD, EDIT_BOARD } from "../constants/actionTypes";

let boards = (state = [], action) => {
  switch (action.type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
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
    default:
      return state;
  }
};

export default boards;
