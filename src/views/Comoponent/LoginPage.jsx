import { Form, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./FrontPage.css";
import allStore from "../../store/actions";
import Home from "../Home/home";
// import background from "../../assets/work.jpg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(({ loading }) => loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const payload = { email: email, password: password };
    // console.log(payload);
    dispatch(allStore.login({ email, password }));
  };

  if (localStorage.token) {
    return <Home />;
  }

  return (
    <>
      <div className="containerLogin">
        <div className="container-form-login">
          <div className="navigation">
            <Link className="text-decoration-none text-light px-3 pt-2 fw-bold" to="/register">
              Register
            </Link>
          </div>
          <div>
            <Form onSubmit={handleSubmit} className="glass">
              <h1 className="text-center pb-2 text-dark">Please Login</h1>
              <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <p>
                Don't have acount ?{" "}
                <span style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/register")}>
                  Register here
                </span>
              </p>
              <Button variant="primary" className="login-btn" type="submit">
                {loading ? <Spinner animation="border" className="sr-only" className="spinner" /> : <>Login</>}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
