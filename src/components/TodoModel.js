import React from "react";
import { completeTodo, deleteTodo, editTodo, saveEditTodo } from "./actions";
import { connect } from "react-redux";

function TodoModel({
  todo,
  completeTodo,
  deleteTodo,
  saveEditTodo,
  editTodo,
  editInput,
  editedId
}) {
  const handleEdit = () => {
    //Lift the old todo , id  and reset it status isComplete
    saveEditTodo({ editedId: todo.id, editInput: todo.label });
  };
  const handleConfirmEdit = () => {
    //Check if the modification is not empty else get back the old todo
    editInput.trim()
      ? editTodo(todo.id)
      : saveEditTodo({ editedId: null, editInput: "" });
  };

  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this todo ?")) {
      deleteTodo(id);
    }
  };

  return (
    <li
      key={todo.id}
      className="row d-flex align-items-baseline list-group-item"
    >
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
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
      </div>
      <button
        className="btn-lg bg-light todo-btn "
        onClick={editedId === todo.id ? handleConfirmEdit : handleEdit}
      >
        {editedId === todo.id ? "Confirm" : "Edit"}
      </button>
      <div className="col-2">
        <input
          onChange={e =>
            saveEditTodo({ editInput: e.target.value, editedId: todo.id })
          }
          className={
            todo.isComplete
              ? `${
                  editedId === todo.id ? "" : "border-0"
                } font-weight-bold form-control-lg  todo-label`
              : `${
                  editedId === todo.id ? "" : "border-0"
                } font-weight-bold form-control-lg`
          }
          value={editedId === todo.id ? editInput : todo.label}
          readOnly={!editedId === todo.id}
        />
      </div>
    </li>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    completeTodo: key => dispatch(completeTodo(key)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    saveEditTodo: todo => dispatch(saveEditTodo(todo)),
    editTodo: id => dispatch(editTodo(id))
  };
};

const mapStateToProps = state => {
  return {
    editInput: state.editInput,
    editedId: state.editedId
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoModel);
