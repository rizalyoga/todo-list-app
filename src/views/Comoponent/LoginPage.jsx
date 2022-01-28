import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./FrontPage.css";
import allStore from "../../store/actions";
import Home from "../Home/home";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email: email, password: password };
    console.log(typeof payload);
    console.log(payload);
    dispatch(allStore.login({ email, password }));
  };

  if (localStorage) {
    return <Home />;
  }

  return (
    <>
      <div className="containerLogin">
        <div>
          <div className="navigation">
            <Link className="text-decoration-none text-light px-3 pt-2" to="/register">
              Register
            </Link>
            <Link className="text-decoration-none text-light px-3 pt-2" to="/login">
              Login
            </Link>
          </div>
          <h1 className="text-center pb-2">Please Login</h1>
          <div className="container-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
