import React from "react";
import Layout from "../Layout"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Inicial";
import Imovel from "../Pages/Imovel"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" key="home" component={Home} />
        <Route exact path="/imovel/:id" component={Imovel}/>
      </Layout>
    </Switch>
  </BrowserRouter>
);
export default Routes;
