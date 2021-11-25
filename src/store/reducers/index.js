import { combineReducers } from "redux";
import addRegister from "../actions/AddRegister.js";
import addTodo from "../actions/addTodo.js";
import ListTodoReducer from "./ListTodoReducer";

const rootReducers = combineReducers({
  addRegister,
  addTodo,
  ListTodoReducer,
});

export default rootReducers;
