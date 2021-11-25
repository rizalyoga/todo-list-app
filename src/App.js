import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./views/Comoponent/Navbar.jsx";
import Home from "./views/Home/home.jsx";
import ListDone from "./views/Home/ListDone.jsx";
// import Modal from "./views/Comoponent/Modal.jsx";
import LoginPage from "./views/Comoponent/LoginPage.jsx";
import RegisterPage from "./views/Comoponent/RegisterPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import allStore from './redux_store/actions/index.js'


const App = () => {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listDone/" element={<ListDone />} />
        </Routes>
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/register/" element={<RegisterPage />} />
        </Routes>
        {/* <Modal /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
