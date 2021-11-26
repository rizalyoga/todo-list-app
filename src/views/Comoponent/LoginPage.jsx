import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./FrontPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

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
            <Form>
              <Form.Group className="mb-3 " controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={() => navigate("/")}>
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
