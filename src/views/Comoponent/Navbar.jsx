import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import logo from "../../assets/test.png";

const NavigationBar = () => {
  const handleLogout = () => {
    swal({
      title: "Are you sure to logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.clear();
        swal("Logout Success !!!", { icon: "success", buttons: false });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="position-fixed" style={{ zIndex: "99" }}>
        <Container>
          <div className="d-flex justify-content-between">
            <div className="logo d-flex justify-content-center align-items-center">
              <Navbar.Brand href="/">
                <img src={logo} width="40" height="40" className=" align-top" alt="Todo logo" className="mt-1" />
              </Navbar.Brand>
            </div>
            <div className="menu d-flex justify-content-center align-items-center">
              <Nav className="me-auto ">
                <Link className="menu-nav text-decoration-none text-light px-2" to="/">
                  Home
                </Link>
                <Link className="menu-nav text-decoration-none text-light px-2" to="/listDone">
                  List Done
                </Link>
                <Link className="menu-nav text-decoration-none text-light px-2" to="#" onClick={() => handleLogout()}>
                  Logout
                </Link>
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
