import { Form, Button } from "react-bootstrap";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="containerLogin">
        <div>
          <h1 className="text-center pb-3">Please Login</h1>
          <div className="container-form">
            <Form>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
