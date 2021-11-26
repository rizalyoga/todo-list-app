const stateInitial = [];

// Parameter action adalah untuk menerima objek dari fungsi  ./action/fetchListTodo
const ListTodoReducer = (state = stateInitial, action) => {
  if (action.type === "SET_LIST_TODO") {
    return action.payload;
  }

  return state;
};

export default ListTodoReducer;
