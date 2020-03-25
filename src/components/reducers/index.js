import {
  SAVE_TODO,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  SAVE_EDIT_TODO
} from "../const/actionTypes";

const initState = {
  todos: [],
  input: "",
  editInput: "",
  editedId: null
};
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return { ...state, input: action.todo };
    case SAVE_EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.editedId? { ...todo, isComplete: false } : todo
        ),
        editInput: action.payload.editInput,
        editedId: action.payload.editedId
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        input: "",
        editInput: ""
      };
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
          todo.id === action.id
            ? { ...todo, label: state.editInput, isComplete: false }
            : todo
        ),
        editInput: "",
        editedId: null
      };

    default:
      return state;
  }
};
export default todoReducer;
