import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import "./responsive.css";
// import { Button } from "bootstrap";

const Home = () => {
  return (
    <Container>
      <div className="welcome">
        <p className="text-center">Silahkan Tekan Tombol PLUS (+) untuk Menambahkan Todo</p>

        <div className="addButton">
          <img src="https://cdn-icons.flaticon.com/png/512/3285/premium/3285752.png?token=exp=1637736620~hmac=776741507fb2db5e5dc48fdcda16e693" alt="Add-Todo-Button" id="addButton" />
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
                      src="https://cdn-icons.flaticon.com/png/512/4192/premium/4192658.png?token=exp=1637739061~hmac=d3f4b76aa3a9710fa07560355cd9f398"
                      alt="icon-done"
                      onClick={() => {
                        console.log("ini-done");
                      }}
                    />
                    <img
                      className="edit"
                      src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1637753454~hmac=9328be74199fd2fd97250ca8067e1d52"
                      alt="icon-edit"
                      onClick={() => {
                        console.log("ini-edit");
                      }}
                    />
                    <img
                      className="trash"
                      src="https://cdn-icons-png.flaticon.com/512/2602/2602768.png"
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
      </div>
    </Container>
  );
};

export default Home;
