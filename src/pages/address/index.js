import React, { Fragment } from "react";

import HeaderTitle from "../../components/HeaderTitle";
import AddressList from '../../components/Address'
import { AddressBox } from "./style";

const AddressPage = () => {
  return (
    <Fragment>
      <HeaderTitle>MEUS ENDEREÇOS</HeaderTitle>
      <AddressBox>
        <AddressList />
      </AddressBox>
    </Fragment>
  );
};

export default AddressPage;
