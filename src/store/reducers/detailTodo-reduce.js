const stateInitial = [];

// Parameter action adalah untuk menerima objek dari fungsi  ./action/fetchListTodo
const DetailTodoReducer = (state = stateInitial, action) => {
  console.log(action.payload);
  if (action.type === "SET_DETAIL_TODO") {
    return action.payload;
  }

  return state;
};

export default DetailTodoReducer;
