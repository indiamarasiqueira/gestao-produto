import React, { useState, Fragment } from "react";

import HeaderTitle from "../../components/HeaderTitle";
import BoxSearch from "../../components/BoxSearch/index";
import Order from "../../components/Order/index";
import AlertCovid from '../../components/AlertCovid/index';

const OrderHistory = () => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
  };

  return (
    <Fragment>
      <AlertCovid />
      <HeaderTitle>HISTÓRICO DE PEDIDOS</HeaderTitle>
      <BoxSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Order query={query} />
    </Fragment>
  );
};
export default OrderHistory;
