import axios from "axios";
import allStore from "./index";

export const DetailTodo = (id) => {
  const token = localStorage.getItem("token");

  return (dispatch) => {
    console.log(id);
    dispatch(allStore.setLoading(true));
    axios
      .get(`https://peaceful-citadel-71310.herokuapp.com/todo/${id}`, {
        headers: {
          token,
        },
      })
      .then(({ data }) => {
        // console.log(data.data);
        dispatch(allStore.SetDetailTodo(data.data));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => dispatch(allStore.setLoading(false)));
  };
};

export const SetDetailTodo = (payload) => {
  return {
    //type adalah kunci untuk melakukan SET DATA
    type: "SET_DETAIL_TODO",
    payload,
  };
};
