import React, {  useState } from "react";

import { OrderMenu} from "./style";

import AppMenu from '../../components/AppMenu'
import AlertCovid from "../../components/AlertCovid";
import HeaderTitle from "../../components/HeaderTitle";
import BoxSearch from "../../components/BoxSearch/index";
import Order from "../../components/Order/index";


const OrderHistory = () => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
  };

  return (
    <OrderMenu>
      <div>
        <AppMenu />
      </div>
      <div>
        <AlertCovid />
        <HeaderTitle>HISTÓRICO DE PEDIDOS</HeaderTitle>
        <BoxSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
        <Order query={query} />
      </div>
    </OrderMenu>
  );
};
export default OrderHistory;
