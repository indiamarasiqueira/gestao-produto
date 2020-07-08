import React from "react";

import AddressItem from './item';

import {
  AddressList,
  AddressListItem,
} from "./style";

const Address = () => {
  return (
    <AddressList>
      <AddressListItem>
        <AddressItem />
      </AddressListItem>
    </AddressList>
  );
};

export default Address;
