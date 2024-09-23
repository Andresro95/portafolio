import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactDOM from "react-dom";
import store from "./imports/app/store";
import Landing from "./pages/landing/landing";
// import Habiliades from "./pages/skills/habiliades"

import { Provider } from "react-redux";

// import App from "./App";

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          {/* <Route exact path="/password" element={<Habiliades />} /> */}
        </Routes>
        <ToastContainer position="top-right" theme="dark" />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
