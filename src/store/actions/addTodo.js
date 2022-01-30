import axios from "axios";
import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";

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
        swal({ icon: "success", title: "Todo sucsess add" });
      })
      .catch(({ error }) => {
        dispatch({
          type: ADD_TODO,
          payload: {
            loading: false,
            data: error,
            errorMessage: error,
          },
        });
        if (error === undefined) {
          swal("Set date minimal is tomorrow", { icon: "error", buttons: false, timer: 3000 });
        }
      });
  };
};

export default addTodo;
