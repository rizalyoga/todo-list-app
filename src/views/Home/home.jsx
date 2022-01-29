import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import "./responsive.css";
/* ---------------------------------- IMAGE --------------------------------- */
import bin from "../../assets/bin.svg";
import check from "../../assets/check.png";
import edit from "../../assets/edit.png";
import addButton from "../../assets/plus.png";
import Navbar from "../Comoponent/Navbar.jsx";
import buttonOnScroll from "../../assets/addOnScroll.svg";
/* --------------------------------- Allert --------------------------------- */
import swal from "sweetalert";
/* --------------------------------- Actions -------------------------------- */
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import axios from "axios";
import moment from "moment";
import Login from "../Comoponent/LoginPage.jsx";
import { updateTodo } from "../../store/actions/updateTodo.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const headers = {
    token: localStorage.getItem("token"),
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useSelector untuk mengambil nilai di rootReducer
  const listTodo = useSelector(({ ListTodoReducer }) => ListTodoReducer);

  useEffect(() => {
    dispatch(allStore.fetchListTodo());
  }, [dispatch]);

  //handle delete Sweet Alert
  const handleDelete = (id) => {
    swal({
      title: "Kamu Yakin ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://peaceful-citadel-71310.herokuapp.com/todo/${id}`, {
            headers,
          })
          .then((response) => {
            // console.log("3.berhasil dapat data", response.data);
            dispatch(allStore.fetchListTodo());
          })
          .catch(({ error }) => {
            console.log("3.berhasil dapat data", error.data);
          });
        swal("Data Sukses dihapus", {
          icon: "success",
        });
      }
    });
  };

  //Goes to Form Edit
  const getDetailTodo = (id) => {
    dispatch(allStore.DetailTodo(id));
    navigate(`/edit/${id}`);
  };

  //Done Feature

  const done = (id, title, description, due_date) => {
    const data = {
      id: id,
      title: title,
      description: description,
      due_date: due_date,
      status: true,
    };
    swal({
      title: "Kamu Yakin ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(updateTodo(data));
        swal("Please Wait...", {
          icon: "warning",
          timer: 1000,
          buttons: false,
        });
      }
    });
  };

  if (!localStorage.token) {
    return <Login />;
  }

  return (
    <>
      <Navbar />
      <Container>
        <div className="welcome">
          <p className="text-center">Silahkan Tekan Tombol PLUS (+) untuk Menambahkan Todo</p>

          <div className="addButton">
            <img src={addButton} alt="Add-Todo-Button" id="addButton" onClick={() => navigate("/CreateForm")} />
          </div>
          <div className="col-container">
            <div className="listUnTodo" id="listUnTodo">
              <h3>List Todo</h3>
              {listTodo.length === 0 ? (
                <p>Please Wait...</p>
              ) : (
                listTodo
                  .filter((data) => data.status === false)
                  .map((el, index) => (
                    <div className="detailTodo pt-3" id={`listId${index}`} key={index}>
                      <div className="desc">
                        <h5 className="fw-bold pb-2">{el.title}</h5>
                        <div className="container-list d-flex ">
                          <div className="list">
                            <p className="lh-1">{el.description}</p>
                            <p className="lh-1">{moment(el.due_date, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY")}</p>
                          </div>
                          <div className="button-act d-flex justify-content-center align-item-center">
                            <img className="done" src={check} alt="icon-done" onClick={() => done(el.id, el.title, el.description, el.due_date)} />
                            <img className="edit" src={edit} alt="icon-edit" onClick={() => getDetailTodo(el.id)} />
                            <img className="trash" src={bin} alt="icon-trash" onClick={() => handleDelete(el.id)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>

          <div className="stickyButton">
            <img src={buttonOnScroll} alt="sticky-button" onClick={() => navigate("/CreateForm")} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
