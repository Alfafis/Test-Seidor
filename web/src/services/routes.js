import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/home/home";
import Funcionario from "../pages/funcionario/funcionario";
import Base from "../pages/base/base";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Base} path="/base" />
      <Route component={Funcionario} path="/funcionario" />
    </BrowserRouter>
  );
};

export default Routes;
