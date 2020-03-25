import {
  ADD_TODO,
  SAVE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  SAVE_EDIT_TODO
} from "../const/actionTypes";

export const saveTodo = todo => {
  return { type: SAVE_TODO, todo };
};
export const addTodo = todo => {
  return { type: ADD_TODO, todo };
};
export const saveEditTodo = payload => {
  return { type: SAVE_EDIT_TODO, payload };
};
export const completeTodo = key => {
  return { type: COMPLETE_TODO, key };
};
export const deleteTodo = id => {
  return { type: DELETE_TODO, id };
};

export const editTodo = id => {
  return { type: EDIT_TODO, id };
};
