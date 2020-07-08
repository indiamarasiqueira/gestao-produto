import React, { Fragment } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import GenericPage from "./pages/generic";
import AppMenu from "./components/AppMenu";
import OrderHistory from "./pages/orderHistory";
import Address from "./pages/address";
import Profile from "./pages/profile";
import RequestPage from "./pages/requests";

import { MainApp, MainLayout } from "./styles/layout";

export default function Routes() {
  const { pathname } = useLocation();
  const isProfile = pathname === "/perfil";

  return (
    <Fragment>
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

      <RequestPage showOrderLasted={isProfile} />
    </Fragment>
  );
}
