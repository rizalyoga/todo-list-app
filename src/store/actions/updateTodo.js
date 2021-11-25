import axios from "axios";

export const UPDATE_TODO = "UPDATE_TODO";
export const DETAIL_TODO = "DETAIL_TODO";

export const updateTodo = (data) => {
  const headers = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhY2htYWRAbWFpbC5jb20iLCJpYXQiOjE2Mzc3ODk1OTZ9.mPrUErTk9WngtaBgt8p05CbKOr7sDeTexiUHOIECRew",
  };
  //   let navigate = useNavigate();
  console.log("2.masuk Action");
  console.log(data);
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
        console.log("3.berhasil dapat data", response.data);
        console.log("hai", response);
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
        console.log("3.berhasil dapat data", error.data);
        console.log("hai", error);
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
