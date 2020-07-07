import React, { Fragment, useState } from "react";

import BoxSearch from "../../components/BoxSearch/index";
import HeaderTitle from "../../components/HeaderTitle";
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
    <Fragment>
      <HeaderTitle>HISTÓRICO DE PEDIDOS</HeaderTitle>
      <BoxSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Order query={query} />
    </Fragment>
  );
};
export default OrderHistory;
