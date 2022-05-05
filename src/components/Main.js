import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Register from "../pages/Register";

const Main = () => {
  return (
    <Routes>
      <Route path="/" component={Homepage}></Route>
      <Route path="/register" component={Register}></Route>
    </Routes>
  );
};

export default Main;
