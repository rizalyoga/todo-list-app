import axios from "axios";

// untuk fetching data dari API
export const fetchListTodo = () => {
  const token = localStorage.getItem("token");
  //dispatch untuk memanggil setListTodo
  return (dispatch) => {
    axios
      .get("https://peaceful-citadel-71310.herokuapp.com/todo", {
        headers: {
          token,
        },
      })
      .then(({ data }) => {
        dispatch(setListTodo(data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// untuk export ke reducers ( payload adalah data dari fetchListTodo)
export const setListTodo = (payload) => {
  return {
    //type adalah kunci untuk melakukan SET DATA
    type: "SET_LIST_TODO",
    payload,
  };
};
