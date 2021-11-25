import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import "./responsive.css";
import addButton from "../../assets/plus.png";
import Navbar from "../Comoponent/Navbar.jsx";
import TodoForm from "../Comoponent/Todo/TodoForm";
import Todo from '../Comoponent/Todo/Todo'
import './InputTodo.css'


const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos)
  }
  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    
    setTodos(removeArr);
  }


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  
  // const navigate = useNavigate();
  // const posts = useSelector(({listPost}) => listPost)
  // //isinya yg ada di reducer

  // const goToDetail = (id) => {
  //   navigate(`/detail/${id}`)
  // }

  return (
    <>
      <Navbar />
      <Container>
        <div className="welcome">
          <p className="text-center">Silahkan Tekan Tombol PLUS (+) untuk Menambahkan Todo</p>

          <div className="addButton">
            <img src={addButton} alt="Add-Todo-Button" id="addButton"
            />
          </div>
          <TodoForm onSubmit={addTodo}/>
          <h3>List Todo</h3>
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
      
          <div className="stickyButton">
            <img src="https://cdn-icons.flaticon.com/png/512/3285/premium/3285752.png?token=exp=1637736620~hmac=776741507fb2db5e5dc48fdcda16e693" alt="sticky-button" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;