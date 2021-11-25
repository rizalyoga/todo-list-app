import React, { useState } from "react";
import TodoForm from "./TodoForm";
import bin from "../../../assets/bin.svg";
import check from "../../../assets/check.png";
// import { AiOutlineCheckSquare } from "react-icons/ai";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      <h5>What's the plan for today?</h5>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <div className="button-act d-flex justify-content-center align-item-center">
          <img
            className="done"
            alt="icon-done"
            onClick={() => {
              completeTodo(todo.id);
            }}
          />{" "}
          {todo.text}
          <img src={check} className="edit" src={edit} alt="icon-edit" onClick={() => setEdit({ id: todo.id, value: todo.text })} />
          <img src={bin} className="trash" alt="icon-trash" onClick={() => removeTodo(todo.id)} />
        </div>
      </div>
    </div>
  ));
}

export default Todo;
