import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./form.css";
import { updateTodo } from "../../../store/actions/updateTodo.js";
import Navibar from "../Navbar";
import allStore from "../../../store/actions/index.js";
import setMinDate from "./date.js";

const UpdateTodo = () => {
  let navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [due_date, setdate] = useState("");
  const [id, setId] = useState("");

  const detailTodos = useSelector(({ detailTodos }) => detailTodos);
  const loading = useSelector(({ loading }) => loading);

  const dispatch = useDispatch();

  //GET-ID
  const params = useParams();
  useEffect(() => {
    setId(params.id);
  }, [params]);

  //SET MIN DATE
  useEffect(() => {
    setMinDate();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTodo({ id: id, title: title, description: description, due_date: due_date }));
  };

  useEffect(() => {
    dispatch(allStore.DetailTodo(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (detailTodos) {
      settitle(detailTodos.title);
      setdescription(detailTodos.description);
      setdate(detailTodos.due_date);
    }
  }, [detailTodos]);

  return (
    <>
      <Navibar />
      <div className="containerUpdate">
        <div className="container-form">
          <div>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3 " controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" value={title} onChange={(event) => settitle(event.target.value)} autoComplete="off" required />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" as="textarea" rows="5" name="description" placeholder="Enter description" value={description} onChange={(event) => setdescription(event.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="due_date">
                <Form.Label>Date ( Minimal to set date is tomorrow )</Form.Label>
                <Form.Control id="datefield" type="date" name="due_date" placeholder="due_date" value={due_date} onChange={(event) => setdate(event.target.value)} required />
              </Form.Group>
              <Button variant="primary" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button className="mx-3" variant="primary" type="submit">
                {loading ? <Spinner animation="border" className="spinner" /> : <>Update</>}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTodo;
