import React from "react";
import EditTodo from "./EditTodo";
import { completeTodo, deleteTodo } from "./actions";
import { connect } from "react-redux";

function TodoModel({ todo, completeTodo = () => {}, deleteTodo = () => {} }) {
  return (
    <li key={todo.id} className="list-group-item">
      <div className="col-1.7">
        <button
          className="btn-lg bg-light todo-btn"
          onClick={() => completeTodo(todo.id)}
        >
          {todo.isComplete ? "Undo" : "Complete"}
        </button>
      </div>
      <div className="col-1.7">
        <button
          className="btn-lg bg-light todo-btn "
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
      <EditTodo todo={todo} />
      <div className="col-2">
        <h2 className={todo.isComplete ? "todo-label" : ""}>{todo.label}</h2>
      </div>
    </li>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    completeTodo: key => dispatch(completeTodo(key)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

const mapStateToProps = state => {
  return {
    input: state.input,
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoModel);
