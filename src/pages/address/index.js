import React, { Fragment } from "react";

import HeaderTitle from "../../components/HeaderTitle";
import AddressList from "../../components/Address";
import { PageContent } from "../../components/Core";

const AddressPage = () => {
  return (
    <Fragment>
      <HeaderTitle>MEUS ENDEREÇOS</HeaderTitle>
      <PageContent>
        <AddressList />
      </PageContent>
    </Fragment>
  );
};

export default AddressPage;
