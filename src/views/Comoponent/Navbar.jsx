import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const navigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="d-flex justify-content-between">
            <Navbar.Brand href="/">
              <img src="https://cdn-icons-png.flaticon.com/512/1039/1039328.png" width="30" height="30" className=" align-top" alt="Todo logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link className="text-decoration-none text-light px-3 pt-2" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-light pt-2" to="/listDone">
                List Done
              </Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default navigationBar;
