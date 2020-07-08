import React from "react";

import RequestItem from "./item";

import orderData from "../../data/order.json";

import { RequestContainer } from "./style";

const RequestPage = ({ showOrderLasted }) => {
  const lastOrder = showOrderLasted ? orderData.data[0] : null;

  return (
    <RequestContainer>
      {lastOrder && <RequestItem order={lastOrder} />} <hr />
    </RequestContainer>
  );
};

RequestPage.defaultProps = {
  showOrderLasted: false,
};

export default RequestPage;
