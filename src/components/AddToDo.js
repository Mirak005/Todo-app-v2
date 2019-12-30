import React, { Component } from "react";
import { connect } from "react-redux";
import { saveTodo, addTodo } from "./actions";

class AddToDo extends Component {
  render() {
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
              value={this.props.input}
              // save the to do 
              onChange={e => {
                this.props.saveTodo(e.target.value);
              }}
              name="title"
            />
          </div>
        </div>
        <div className="row justify-content-end">
          <button
          // add the new todo , and prevent the empty input
            onClick={() =>
              this.props.input === ""
                ? alert("Enter a valid task")
                : this.props.addTodo({
                    label: this.props.input,
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
  }
}

const mapStateToProps = state => {
  return {
    input: state.input,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveTodo: todo => dispatch(saveTodo(todo)),
    addTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);

