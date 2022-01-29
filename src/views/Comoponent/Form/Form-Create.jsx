import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./form.css";
import addTodo from "../../../store/actions/addTodo.js";
import Navibar from "../Navbar.jsx";

const CreateTodo = () => {
  let navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [due_date, setdate] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: title, description: description, due_date: due_date }));
    // navigate("/");
    setTimeout(() => {
      settitle("");
      setdescription("");
      setdate("");
    }, 1000);
  };

  return (
    <>
      <Navibar />
      <div className="containerCreate">
        <div className="container-form">
          <div>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3 " controlId="title">
                <Form.Label>Title Todo</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" value={title} onChange={(event) => settitle(event.target.value)} autoComplete="off" required />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" as="textarea" name="description" placeholder="Enter description" value={description} onChange={(event) => setdescription(event.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="due_date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="due_date" placeholder="due_date" value={due_date} onChange={(event) => setdate(event.target.value)} required />
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
