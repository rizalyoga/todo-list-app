import { fetchListTodo, setListTodo } from "./fetchListTodo.js";
import login from "./login";
import { DetailTodo, SetDetailTodo } from "./getDetailTodo";

const allStore = {
  fetchListTodo,
  setListTodo,
  login,
  DetailTodo,
  SetDetailTodo,
};

export default allStore;
