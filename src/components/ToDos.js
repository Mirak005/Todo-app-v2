import React, { Component } from "react";
import { connect } from "react-redux";
import TodoModel from "./TodoModel";

class ToDos extends Component {
  render() {
    return (
      <section className="bg-light container add-todo-div">
        <div className="row justify-content-center">
          <p className="h1">Let's get some work done!</p>
        </div>
        <ul className="list-group list">
          {this.props.todos.map(todo => (
            <TodoModel todo={todo} key={todo.id} />
          ))}
        </ul>
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

export default connect(mapStateToProps)(ToDos);
