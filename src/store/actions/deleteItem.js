import axios from "axios";

const deleteItem = (data) => {
  const headers = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhY2htYWRAbWFpbC5jb20iLCJpYXQiOjE2Mzc3ODk1OTZ9.mPrUErTk9WngtaBgt8p05CbKOr7sDeTexiUHOIECRew",
  };
  //   let navigate = useNavigate();
  console.log("2.masuk Action");
  console.log(data);
  return (dispatch) => {
    axios
      .delete(`https://peaceful-citadel-71310.herokuapp.com/todo/${data}`, {
        headers,
      })
      .then((response) => {
        console.log("3.berhasil dapat data", response.data);
      })
      .catch(({ error }) => {
        console.log("3.berhasil dapat data", error.data);
      });
  };
};

export default deleteItem;
