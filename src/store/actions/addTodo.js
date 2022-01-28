import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ADD_TODO = "ADD_TODO";

const addTodo = (data) => {
  const headers = {
    token: localStorage.getItem("token"),
  };
  //   let navigate = useNavigate();
  return (dispatch) => {
    // loading;
    dispatch({
      type: ADD_TODO,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .post("https://peaceful-citadel-71310.herokuapp.com/todo", data, {
        headers,
      })
      .then((response) => {
        // console.log(token);
        dispatch({
          type: ADD_TODO,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(({ error }) => {
        dispatch({
          type: ADD_TODO,
          payload: {
            loading: false,
            data: error.data,
            errorMessage: error.message,
          },
        });
        console.log("hai", error);
      });
  };
};

export default addTodo;
