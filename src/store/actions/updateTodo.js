import axios from "axios";

export const UPDATE_TODO = "UPDATE_TODO";
export const DETAIL_TODO = "DETAIL_TODO";

export const updateTodo = (data) => {
  const headers = {
    token: localStorage.getItem("token"),
  };

  return (dispatch) => {
    // loading;
    dispatch({
      type: UPDATE_TODO,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

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
      })
      .catch(({ error }) => {
        dispatch({
          type: UPDATE_TODO,
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

export const detailTodo = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_TODO,
      payload: {
        data: data,
      },
    });
  };
};
