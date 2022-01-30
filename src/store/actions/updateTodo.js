import axios from "axios";
import swal from "sweetalert";
import allStore from "./index";

export const UPDATE_TODO = "UPDATE_TODO";

export const updateTodo = (data) => {
  const headers = {
    token: localStorage.getItem("token"),
  };

  return (dispatch) => {
    // loading;
    dispatch(allStore.setLoading(true));
    axios
      .put(`https://peaceful-citadel-71310.herokuapp.com/todo/` + data.id, data, {
        headers,
      })
      .then((response) => {
        // console.log(token);
        dispatch({
          type: UPDATE_TODO,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        dispatch(allStore.fetchListTodo());
        swal({ icon: "success", title: "Todo sucsess to update" });
      })
      .catch(({ error }) => {
        dispatch({
          type: UPDATE_TODO,
          payload: {
            loading: false,
            data: error,
            errorMessage: error,
          },
        });
        if (error === undefined) {
          swal(`Minimal date is tomorrow`, { icon: "error", buttons: false, timer: 3000 });
        } else {
          swal(`${error}`, { icon: error, buttons: false, timer: 3000 });
        }
      })
      .finally(() => dispatch(allStore.setLoading(false)));
  };
};
