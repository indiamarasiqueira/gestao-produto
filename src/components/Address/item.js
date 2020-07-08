import React, { Fragment } from "react";

import HeaderTitle from "../HeaderTitle";
import TextGroup from "../TextGroup";
import FieldRadio from "../FieldRadio";
import ButtonPrimary from "../Button/primary";

import { AddressContainer, AddressHeader, AddressUser, AddressTitle, BtnEdit, AddressInfo } from "./style";

const AddressItem = () => {
  return (
    <Fragment>
      <AddressContainer>
        <AddressHeader>
          <AddressTitle>COMERCIAL</AddressTitle>
          <BtnEdit>EDITAR</BtnEdit>
        </AddressHeader>
        <AddressUser>
          <TextGroup title="nome:" value="Caroline Melinda W Efftign" />
          <TextGroup title="destinatário:" value="Caroline Melinda W Efftign" />
        </AddressUser>
        <AddressInfo>
          <TextGroup title="endereço:" value="Rua Edmundo Goldacker, 45 - Casa Fortaleza, Blumenau - SC - 89056540 " />
        </AddressInfo>

        <FieldRadio label="endereço padrão" name="endereco" />
        <FieldRadio label="endereço de cobrança" name="endereco" />
      </AddressContainer>
      <ButtonPrimary>+ Adicionar novo endereço</ButtonPrimary>
    </Fragment>
  );
};

export default AddressItem;
