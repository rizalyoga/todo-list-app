import { combineReducers } from "redux";
import addRegister from "../actions/AddRegister.js";
import addTodo from "../actions/addTodo.js";
import ListTodoReducer from "./ListTodoReducer";
import { updateTodo, detailTodo } from "../actions/updateTodo.js";

const rootReducers = combineReducers({
  addRegister,
  addTodo,
  ListTodoReducer,
  updateTodo,
  detailTodo,
});

export default rootReducers;
