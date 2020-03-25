import React, { Component } from "react";
import { connect } from "react-redux";
import { saveTodo, addTodo } from "./actions";

const AddToDo = ({ input, saveTodo, addTodo }) => {
  return (
    <section className="container-fluid bg-primary">
      <div className="row">
        <div className="col title">
          <h1 className=" text-right">To Do-App!</h1>
          <h5 className="text-right">Add a New To-do</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* input add new Todo */}
          <input
            className="form-control form-control-lg todo-input"
            type="text"
            placeholder="Enter a new task..."
            value={input}
            // save the to do
            onChange={e => {
              saveTodo(e.target.value);
            }}
            name="title"
          />
        </div>
      </div>
      <div className="row justify-content-end">
        <button
          // add the new todo , and prevent the empty input
          onClick={() =>
            input.trim() 
              ? alert("Enter a valid task")
              : addTodo({
                  label: input,
                  isComplete: false,
                  id: Date.now()
                })
          }
          type="button"
          className="add-btn btn-lg btn-primary"
        >
          Add
        </button>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    input: state.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveTodo: todo => dispatch(saveTodo(todo)),
    addTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
