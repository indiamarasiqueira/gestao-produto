import React, { Fragment } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import PrintIcon from "@material-ui/icons/Print";
import ButtonOutline from "../../components/Button/outline";

import {
  RequestHeader,
  Title,
  MainRequest,
  RequestDescription,
  RequestAll,
  RequestDate,
  RequestId,
  ButtonGroup,
} from "./style";

const RequestItem = ({ order }) => {
  return (
    <Fragment>
      <RequestHeader>
        <Title>ESTE É SEU ÚLTIMO PEDIDO</Title>
        <RequestAll>Ver todos os pedidos</RequestAll>
      </RequestHeader>
      <RequestDate>{order.date}</RequestDate>
      <RequestId>{order.id}</RequestId>
      <MainRequest>
        <RequestDescription>
          <p>
            {order.Confirmed}
            <br />
            {order.description}
            <br />
            Valor total: <b>R$ {order.price} </b>
            <br />
            Forma de pagamento: <b>{order.payment}</b>
          </p>
        </RequestDescription>
        <ButtonGroup>
          <ButtonOutline>
            <VisibilityIcon />
            Ver Detalhes
          </ButtonOutline>
          <ButtonOutline>
            <PrintIcon />
            Imprimir Nota Fiscal
          </ButtonOutline>
        </ButtonGroup>
      </MainRequest>
    </Fragment>
  );
};

export default RequestItem;
