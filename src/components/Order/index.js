import React, { Fragment, useState } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import orderData from "../../data/order.json";
import ButtonOutline from "../Button/outline";

import { Empty, OrderListItem, OrderDate, OrderId, OrderBox, OrderInfo, OrderStatus, OrderAll } from "./style";

const findOrder = (detail, query) => {
  const list = orderData.data;

  if (query) {
    const regex = new RegExp(query);

    return list.filter((item) => regex.test(item.id));
  }

  return detail ? orderData.data : orderData.data.slice(0, 2);
};

const Order = ({ query }) => {
  const [detail, setDetail] = useState(false);
  const list = findOrder(detail, query);

  if (!list.length) {
    return <Empty>nenhum pedido encontrado :(</Empty>;
  }

  return (
    <Fragment>
      {list.map((item, key) => (
        <OrderListItem key={key}>
          <OrderDate>{item.date}</OrderDate>
          <OrderId>{item.id}</OrderId>
          <OrderBox>
            <OrderInfo>
              <OrderStatus>{item.title}</OrderStatus>
              <p>
                {item.description}
                <br />
                Valor total: <b>R$ {item.price} </b>
                <br />
                Forma de pagamento: <b>{item.payment}</b>
              </p>
            </OrderInfo>

            <ButtonOutline>
              <VisibilityIcon />
              Ver Detalhes
            </ButtonOutline>
          </OrderBox>
        </OrderListItem>
      ))}
      {!detail && <OrderAll onClick={setDetail}>Ver todos os pedidos</OrderAll>}
    </Fragment>
  );
};
export default Order;
