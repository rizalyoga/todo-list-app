import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./views/Comoponent/Navbar.jsx";
import Home from "./views/Home/home.jsx";
import ListDone from "./views/Home/ListDone.jsx";
// import Modal from "./views/Comoponent/Modal.jsx";
import LoginPage from "./views/Comoponent/LoginPage.jsx";
import RegisterPage from "./views/Comoponent/RegisterPage.jsx";
import CreateTodo from "./views/Comoponent/Form/Form-Create.jsx";
import EditTodo from "./views/Comoponent/Form/Form-Edit.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listDone/" element={<ListDone />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/register/" element={<RegisterPage />} />
          <Route path="/createForm/" element={<CreateTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
        {/* <Modal /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
