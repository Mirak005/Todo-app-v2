import {
  SAVE_TODO,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO
} from "../const/actionTypes";

const initState = {
  todos: [],
  input: ""
};
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return { ...state, input: action.todo };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo], input: "" };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.key
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.edit.id
            ? { ...todo, label: action.edit.label, isComplete: false}
            : todo
        )
      };

    default:
      return state;
  }
};
export default todoReducer;
