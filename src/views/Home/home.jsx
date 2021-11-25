import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import "./responsive.css";
import bin from "../../assets/bin.svg";
import check from "../../assets/check.png";
import edit from "../../assets/edit.png";
import addButton from "../../assets/plus.png";
// import { Button } from "bootstrap";


import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";


const Home = () => {
  
  const navigate = useNavigate();
  const posts = useSelector(({listPost}) => listPost)
  //isinya yg ada di reducer

  const goToDetail = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <Container>
      <div className="welcome">
        <p className="text-center">Silahkan Tekan Tombol PLUS (+) untuk Menambahkan Todo</p>

        <div className="addButton">
          <img src={addButton} alt="Add-Todo-Button" id="addButton" />
        </div>

        <div className="col-container">
          <div className="listUnTodo" id="listUnTodo">
            <h3>List Todo</h3>
            <div className="detailTodo pt-3">
              <div className="desc">
                <h5 className="fw-bold pb-2">Design UI Todo-list-App</h5>
                <div className="container-list d-flex ">
                  <div className="list">
                    <p className="lh-1">Mengerjakan UI Todo-list-App untuk prokeck group</p>
                    <p className="lh-1">24 Novemner 2021</p>
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
                    <img
                      className="trash"
                      src={bin}
                      alt="icon-trash"
                      onClick={() => {
                        console.log("ini-trash");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stickyButton">
          <img src="https://cdn-icons.flaticon.com/png/512/3285/premium/3285752.png?token=exp=1637736620~hmac=776741507fb2db5e5dc48fdcda16e693" alt="sticky-button" />
        </div>

        {posts.map((el,i) => (
          <div className="mx-5 my-4 border p-3 post-card d-flex justify-content-center" key={i}
          onClick={() => goToDetail(el.id)}>
          <h5>{el.title}</h5>
        </div>
        ))}


      </div>
    </Container>
  );
};

export default Home;
