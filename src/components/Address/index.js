import React from "react";

import AddressItem from "./item";
import userAddress from "../../data/address.json";

import { AddressList, AddressListItem } from "./style";

const Address = () => {
  return (
    <AddressList>
      {userAddress.data.map((user) => (
        <AddressListItem>
          <AddressItem user={user} />
        </AddressListItem>
      ))}
    </AddressList>
  );
};

export default Address;
