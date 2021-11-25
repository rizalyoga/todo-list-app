//REDUCERS

// import { ADD_REGISTER } from "../actions/AddRegister.js";

export const initialState = {
  addRegisterResult: false,
  addRegisterLoading: false,
  addRegisterError: false,
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REGISTER":
      console.log("4. Masuk Reducer:", action);
      return {
        ...state,
        addRegisterResult: action.payload.data,
        addRegisterLoading: action.payload.loading,
        addRegisterError: action.payload.errorMessage,
      };
      break;
    default:
      return state;
  }
};
