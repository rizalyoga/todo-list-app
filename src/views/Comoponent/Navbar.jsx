import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/test.png";

const navigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="d-flex justify-content-between">
            <Navbar.Brand href="/">
              <img src={logo} width="30" height="30" className=" align-top" alt="Todo logo" />
            </Navbar.Brand>
            <Nav className="me-auto ">
              <Link className="text-decoration-none text-light px-3" style={{ marginTop: "10px" }} to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-light" style={{ marginTop: "10px" }} to="/listDone">
                List Done
              </Link>
            </Nav>
            <div className="logout" style={{ float: "end" }}>
              <p className="text-white px-3" style={{ marginTop: "10px" }}>
                Logout
              </p>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default navigationBar;
