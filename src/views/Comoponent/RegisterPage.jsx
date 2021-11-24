import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FrontPage.css";

const RegisterPage = () => {
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
            <Form>
              <Form.Group className="mb-3 " controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
