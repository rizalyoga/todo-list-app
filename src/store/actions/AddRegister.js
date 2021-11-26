import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ADD_REGISTER = "ADD_REGISTER";

const addRegister = (data) => {
  //   let navigate = useNavigate();
  //   console.log("2.masuk Action");
  //   console.log(data);
  return (dispatch) => {
    // loading;
    dispatch({
      type: ADD_REGISTER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .post("https://peaceful-citadel-71310.herokuapp.com/signup", data)
      .then((response) => {
        console.log("3.berhasil dapat data", response.data);
        console.log("hai", response);
        dispatch({
          type: ADD_REGISTER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(({ error }) => {
        dispatch({
          type: ADD_REGISTER,
          payload: {
            loading: false,
            data: error.data,
            errorMessage: error.message,
          },
        });
        console.log("hai hai hai", error);
      });
  };
};

export default addRegister;
