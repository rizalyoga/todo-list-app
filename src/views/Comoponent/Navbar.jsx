import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/test.png";

const NavigationBar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="logo d-flex justify-content-center align-items-center">
              <Navbar.Brand href="/">
                <img src={logo} width="40" height="40" className=" align-top" alt="Todo logo" />
              </Navbar.Brand>
            </div>
            <div className="menu d-flex justify-content-center align-items-center">
              <Nav className="me-auto ">
                <Link className="text-decoration-none text-light px-3" to="/">
                  Home
                </Link>
                <Link className="text-decoration-none text-light" to="/listDone">
                  List Done
                </Link>
              </Nav>
              <div className="logout" style={{ float: "right", cursor: "pointer" }} onClick={() => handleLogout()}>
                <p className="text-white px-3" style={{ marginTop: "16px" }}>
                  Logout
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
