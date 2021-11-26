import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./form.css";
import { updateTodo, detailTodo } from "../../../store/actions/updateTodo.js";

const UpdateTodo = () => {
  let navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [due_date, setdate] = useState("");
  const [id, setId] = useState("");

  const detailTodoResult = useSelector((state) => state.rootReducers);

  const dispatch = useDispatch();

  //GET-ID
  const params = useParams();
  useEffect(() => {
    setId(params.id);
  }, [params]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1.Masuk  handle Submit");
    console.log("title: ", title, "description: ", description, "date: ", due_date);
    dispatch(updateTodo({ id: id, title: title, description: description, due_date: due_date }));
    navigate("/");
  };

  useEffect(() => {
    if (detailTodoResult) {
      settitle(detailTodoResult.title);
      setdescription(detailTodoResult.description);
      setdate(detailTodoResult.due_date);
      setId(detailTodoResult.id);
    }
  }, [detailTodoResult, dispatch]);

  return (
    <>
      <div className="containerUpdate">
        <div>
          <h1 className="text-center pb-2">UPDATE TODO</h1>
          <div className="container-form">
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3 " controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" value={title} onChange={(event) => settitle(event.target.value)} autoComplete="off" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" as="textarea" name="description" placeholder="Enter description" value={description} onChange={(event) => setdescription(event.target.value)} />
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

export default UpdateTodo;
