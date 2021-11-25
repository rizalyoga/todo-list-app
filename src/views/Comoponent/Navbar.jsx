import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/test.png";
import {VscAccount} from 'react-icons/vsc'

const navigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="d-flex justify-content-between">
            <Navbar.Brand href="/">
              <img src={logo} width="30" height="30" className=" align-top" alt="Todo logo" />
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
        <div>
          <Link to="/register" >
            <VscAccount style={{width: '40px'}} className="logo my-1 mx-3" />
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default navigationBar;
