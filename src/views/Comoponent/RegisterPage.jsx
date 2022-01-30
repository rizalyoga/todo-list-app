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
  };

  return (
    <>
      <div className="containerRegister">
        <h1 className="text-center">Register</h1>
        <div className="container-form-register">
          <div className="navigation">
            <Link className="login text-decoration-none text-light px-3 pt-2 fw-bold" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3 " controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              </Form.Group>
              <p>
                Alredy have an acount ?{" "}
                <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "blue" }}>
                  Login
                </span>{" "}
              </p>
              <Button variant="primary" className="register-btn" type="submit">
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
