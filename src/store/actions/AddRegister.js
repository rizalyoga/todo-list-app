import axios from "axios";
import swal from "sweetalert";

export const ADD_REGISTER = "ADD_REGISTER";

const addRegister = (data) => {
  return (dispatch) => {
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
        dispatch({
          type: ADD_REGISTER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        swal({ icon: "success", title: '"Register Success"', buttons: false });
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
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
      });
  };
};

export default addRegister;
