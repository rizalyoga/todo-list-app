import { fetchListTodo, setListTodo } from "./fetchListTodo.js";
import login from "./login";
import { DetailTodo, SetDetailTodo } from "./getDetailTodo";
import setLoading from "./setLoading";

const allStore = {
  fetchListTodo,
  setListTodo,
  login,
  DetailTodo,
  SetDetailTodo,
  setLoading,
};

export default allStore;
