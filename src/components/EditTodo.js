import React from "react";
import Modal from "react-modal";
import { editTodo, saveTodo } from "./actions";
import { connect } from "react-redux";

// check modal , edit function

class EditTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      editTodo: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  // this.props.saveTodo(e.target.value)
  handelEdit = e => this.setState({ editTodo: e.target.value });
  handelConfirm = () => {
    if (this.state.editTodo === "") {
      alert("enter a valid modification");
      this.setState({ editTodo: this.state.editTodo });
    } else {
      this.setState({ editTodo: "", showModal: false });
      this.props.editTodo({
        id: this.props.todo.id,
        label: this.state.editTodo,
        
      });
    }
  };
  render() {
    return (
      <div className="col-1.7">
        <button
          className="btn-lg bg-light todo-btn "
          onClick={this.handleOpenModal}
        >
          Edit
        </button>
        <Modal
          isOpen={this.state.showModal}
          //  customStyles={customStyles}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.2)"
            },
            content: {
              margin: "auto",
              color: "lightsteelblue",
              height: "200px",
              borderRadius: "6px"
            }
          }}
        >
          <input
            className="form-control form-control-lg todo-input"
            type="text"
            placeholder="Edit your task..."
            name="title"
            onChange={this.handelEdit}
          />
          <button
            className="btn-lg bg-light todo-btn"
            onClick={this.handelConfirm}
          >
            Confirm
          </button>
          <button
            className="btn-lg bg-light todo-btn"
            onClick={this.handleCloseModal}
          >
            Cancel
          </button>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveTodo: todo => dispatch(saveTodo(todo)),
    editTodo: edit => dispatch(editTodo(edit))
  };
};

const mapStateToProps = state => {
  return {
    input: state.input,
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
