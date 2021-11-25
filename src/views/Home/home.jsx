import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import "./responsive.css";
import bin from "../../assets/bin.svg";
import check from "../../assets/check.png";
import edit from "../../assets/edit.png";
import addButton from "../../assets/plus.png";
import Navbar from "../Comoponent/Navbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
// import { Button } from "bootstrap";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // useSelector untuk mengambil nilai di rootReducer
  const listTodo = useSelector(({ ListTodoReducer }) => ListTodoReducer);

  useEffect(() => {
    dispatch(allStore.fetchListTodo());
  }, [dispatch]);

  useEffect(() => {
    console.log(listTodo);
  }, [listTodo]);

  const handleDelete = (id) => {
    console.log("buku dengan id:", id);
  };

  const navigate = useNavigate();

  //isinya yg ada di reducer

  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="welcome">
          <p className="text-center">Silahkan Tekan Tombol PLUS (+) untuk Menambahkan Todo</p>

          <div className="addButton">
            <img src={addButton} alt="Add-Todo-Button" id="addButton" />
          </div>
          <div className="col-container">
            <div className="listUnTodo" id="listUnTodo">
              <h3>List Todo</h3>
              {listTodo.map((el, index) => (
                <div className="detailTodo pt-3" key={index}>
                  <div className="desc">
                    <h5 className="fw-bold pb-2">{el.title}</h5>
                    <div className="container-list d-flex ">
                      <div className="list">
                        <p className="lh-1">{el.description}</p>
                        <p className="lh-1">{el.due_date}</p>
                      </div>
                      <div className="button-act d-flex justify-content-center align-item-center">
                        <img
                          className="done"
                          src={check}
                          alt="icon-done"
                          onClick={() => {
                            console.log("ini-done");
                          }}
                        />
                        <img
                          className="edit"
                          src={edit}
                          alt="icon-edit"
                          onClick={() => {
                            console.log("ini-edit");
                          }}
                        />
                        <img className="trash" src={bin} alt="icon-trash" onClick={() => handleDelete(el.id)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="stickyButton">
            <img src="https://cdn-icons.flaticon.com/png/512/3285/premium/3285752.png?token=exp=1637736620~hmac=776741507fb2db5e5dc48fdcda16e693" alt="sticky-button" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
