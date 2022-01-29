import { combineReducers } from "redux";
import addRegister from "../actions/AddRegister.js";
import addTodo from "../actions/addTodo.js";
import ListTodoReducer from "./ListTodoReducer";
import { updateTodo } from "../actions/updateTodo.js";
import detailTodos from "./detailTodo-reduce.js";
import loading from "./loadingReducer";

const rootReducers = combineReducers({
  addRegister,
  addTodo,
  ListTodoReducer,
  updateTodo,
  detailTodos,
  loading,
});

export default rootReducers;
