//REDUCERS

// import { ADD_Todo } from "../actions/AddTodo.js";

export const initialState = {
  addTodoResult: false,
  addTodoLoading: false,
  addTodoError: false,
};

export const Todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        addTodoResult: action.payload.data,
        addTodoLoading: action.payload.loading,
        addTodoError: action.payload.errorMessage,
      };
      break;
    default:
      return state;
  }
};
