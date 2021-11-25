//REDUCERS
export const initialState = {
  updateTodoResult: false,
  updateTodoLoading: false,
  updateTodoError: false,

  detailTodoResult: false,
};

export const updateTodo = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      console.log("4. Masuk Reducer:", action);
      return {
        ...state,
        updateTodoResult: action.payload.data,
        updateTodoLoading: action.payload.loading,
        updateTodoError: action.payload.errorMessage,
      };
    case "DETAIL_TODO":
      return {
        ...state,
        detailTodoResult: action.payload.data,
      };

    default:
      return state;
  }
};
