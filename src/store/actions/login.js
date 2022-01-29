import axios from "axios";
import swal from "sweetalert";
import allStore from "./index";

export const Login = (payload) => {
  localStorage.clear();

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .post(`https://peaceful-citadel-71310.herokuapp.com/signin`, payload)
      .then((response) => {
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        swal({ icon: "success", title: response.data.message });
        // setTimeout(() => {
        //   window.location.href = "/";
        // }, 1000);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      })
      .finally(() => dispatch(allStore.setLoading(false)));
  };
};

export default Login;
