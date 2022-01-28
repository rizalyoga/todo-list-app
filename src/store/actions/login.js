import axios from "axios";
// import swal from "sweetalert";
// import allStore from "./index";

export const Login = (payload) => {
  localStorage.clear();

  return () => {
    axios
      .post(`https://peaceful-citadel-71310.herokuapp.com/signin`, payload)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          window.location.href = "/";
        }, 100);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
};

export default Login;
