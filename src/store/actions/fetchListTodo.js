import axios from "axios";

// untuk fetching data dari API
export const fetchListTodo = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhY2htYWRAbWFpbC5jb20iLCJpYXQiOjE2Mzc3ODk1OTZ9.mPrUErTk9WngtaBgt8p05CbKOr7sDeTexiUHOIECRew";
  //dispatch untuk memanggil setListTodo
  return (dispatch) => {
    axios
      .get("https://peaceful-citadel-71310.herokuapp.com/todo", {
        headers: {
          token,
        },
      })
      .then(({ data }) => {
        console.log(data.data);
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
