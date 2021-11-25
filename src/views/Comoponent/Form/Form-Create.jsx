import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../FrontPage.css";
import addTodo from "../../../store/actions/addTodo.js";

const CreateTodo = () => {
  let navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [due_date, setdate] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1.Masuk  handle Submit");
    console.log("title: ", title, "description: ", description, "date: ", due_date);
    dispatch(addTodo({ title: title, description: description, due_date: due_date }));
    navigate("/");
  };

  return (
    <>
      <div className="containerRegister">
        <div>
          <h1 className="text-center pb-2">CREATE TODO</h1>
          <div className="container-form">
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3 " controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" value={title} onChange={(event) => settitle(event.target.value)} autoComplete="off" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter description" value={description} onChange={(event) => setdescription(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="due_date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="due_date" placeholder="due_date" value={due_date} onChange={(event) => setdate(event.target.value)} />
              </Form.Group>
              <Button variant="primary" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button className="mx-3" variant="primary" type="submit">
                Create
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
