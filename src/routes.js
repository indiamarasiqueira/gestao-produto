import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GenericPage from "./pages/generic";
import AppMenu from "./components/AppMenu";
import OrderHistory from "./pages/orderHistory";
import AlertCovid from "./components/AlertCovid";

export default function Routes() {
  return (
    <BrowserRouter>
      <AppMenu />
      <AlertCovid />
      
      <Switch>
        <Route path="/perfil" exact component={() => <GenericPage title="Meu Perfil" />} />
        <Route path="/localizacao" exact component={() => <GenericPage title="Meus endereços" />} />
        <Route path="/favoritos" exact component={() => <GenericPage title="Lista de favoritos" />} />
        <Route path={["/", "/pedidos"]} exact component={OrderHistory} />
      </Switch>
    </BrowserRouter>
  );
}
