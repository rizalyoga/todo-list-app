import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./FrontPage.css";
import addRegister from "../../store/actions/AddRegister.js";

const RegisterPage = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRegister({ username: username, email: email, password: password }));
    navigate("/login");
  };

  return (
    <>
      <div className="containerRegister">
        <div>
          <div className="navigation">
            <Link className="register text-decoration-none text-light px-3 pt-2" to="/register">
              Register
            </Link>
            <Link className="login text-decoration-none text-light px-3 pt-2" to="/login">
              Login
            </Link>
          </div>
          <h1 className="text-center pb-2">Register</h1>
          <div className="container-form">
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3 " controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter Username" value={username} onChange={(event) => setUsername(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
