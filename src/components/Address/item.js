import React, { Fragment } from "react";

import HeaderTitle from "../HeaderTitle";
import TextGroup from "../TextGroup";
import FieldRadio from "../FieldRadio";
import ButtonPrimary from "../Button/primary";

import { AddressContainer, AddressHeader, AddressUser, AddressTitle, BtnEdit, AddressInfo } from "./style";

const AddressItem = ({ user }) => {
  return (
    <Fragment>
      <AddressContainer>
        <AddressHeader>
          <AddressTitle>{user.title}</AddressTitle>
          <BtnEdit>EDITAR</BtnEdit>
        </AddressHeader>
        <AddressUser>
          <TextGroup title="nome:" value={user.name} />
          <TextGroup title="destinatário:" value={user.recipient} />
        </AddressUser>
        <AddressInfo>
          <TextGroup title="endereço:" value={user.address} />
        </AddressInfo>

        <FieldRadio label="endereço padrão" name="endereco" />
        <FieldRadio label="endereço de cobrança" name="endereco" />
      </AddressContainer>
      <ButtonPrimary>+ Adicionar novo endereço</ButtonPrimary>
    </Fragment>
  );
};

export default AddressItem;
