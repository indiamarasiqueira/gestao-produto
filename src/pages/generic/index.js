import React, { Fragment } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import { Link } from 'react-router-dom'

import { MainPage } from "./style";

const GenericPage = ({ title }) => {
    return (
      <Fragment>
        <HeaderTitle>{title}</HeaderTitle>
        <MainPage>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Link to="/pedidos">ir para histórico de pedidos</Link>
        </MainPage>
      </Fragment>
    );
}

GenericPage.defaultProps = {
    title: "Minha Pagina"
}

export default GenericPage;