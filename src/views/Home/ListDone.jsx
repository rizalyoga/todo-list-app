import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import "./responsive.css";

const ListDone = () => {
  return (
    <Container>
      <div className="welcome">
        <div className="col-container">
          <div className="doneTodo" id="doneTodo">
            <h3>List Todo Done</h3>
            <div className="detailTodo pt-3">
              <div className="desc">
                <h5 className="fw-bold pb-2">Design UI Home Todo-list-App</h5>
                <div className="container-list d-flex ">
                  <div className="list">
                    <p className="lh-1">Mengerjakan UI Home Todo-list-App untuk prokeck group</p>
                    <p className="lh-1">24 Novemner 2021</p>
                  </div>
                  <div className="button-act">
                    <img className="trash" src="https://cdn-icons-png.flaticon.com/512/2602/2602768.png" alt="button-done" />
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

export default ListDone;
