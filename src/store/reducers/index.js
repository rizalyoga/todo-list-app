import { combineReducers } from "redux";
import addRegister from "../actions/AddRegister.js";
import ListTodoReducer from "./ListTodoReducer";

const rootReducers = combineReducers({
  addRegister,
  ListTodoReducer,
});

export default rootReducers;
