import React from "react";
import Layout from "../Layout"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Inicial";
import Imovel from "../Pages/Imovel"
import Imoveis from "../Pages/Imoveis"
import Login from "../Pages/Login"

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/Login" comonent={Login}/>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/Imoveis" component={Imoveis} />
        <Route exact path="/imovel/:id" component={Imovel}/>
      </Layout>
    </Switch>
  </BrowserRouter>
);
export default Routes;
