import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GenericPage from "./pages/generic";
import AppMenu from "./components/AppMenu";
import OrderHistory from "./pages/orderHistory";
import { MainApp, MainLayout } from './style'
import Address from './pages/address'
import Profile from './pages/profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <MainApp>
        <AppMenu />
        <MainLayout>
          <Switch>
            <Route path={["/", "/pedidos"]} exact component={OrderHistory} />
            <Route path="/perfil" exact component={Profile} />
            <Route path="/favoritos" exact component={() => <GenericPage title="Lista de favoritos" />} />
            <Route path="/localizacao" exact component={Address} />
          </Switch>
        </MainLayout>
      </MainApp>
    </BrowserRouter>
  );
}
