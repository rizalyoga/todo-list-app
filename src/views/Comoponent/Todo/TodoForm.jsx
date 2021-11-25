import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const[input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault(); //supaya ga refresh

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  };

  return (
      <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <div className="list">
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="lh-1 todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <p className="lh-1">Date</p>

          <button className="todo-button edit">Update</button>
        </div>
        </>
      ) : (
        <>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <p className="lh-1">Date</p>

        <button className="todo-button">Add todo</button>
        </>
      )}
      </form>    
  )
}

export default TodoForm
