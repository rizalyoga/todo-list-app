import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./views/Comoponent/Navbar.jsx";
import Home from "./views/Home/home.jsx";
import ListDone from "./views/Home/ListDone.jsx";
// import Modal from "./views/Comoponent/Modal.jsx";
import LoginPage from "./views/Comoponent/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listDone/" element={<ListDone />} />
        </Routes>
        {/* <LoginPage /> */}
        {/* <Modal /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
