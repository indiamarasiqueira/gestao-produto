import React, { Fragment } from "react";

import HeaderTitle from "../../components/HeaderTitle";
import ProfileItem from "./item";
import { PageContent } from "../../components/Core";
import ButtonOutline from "../../components/Button/outline";

import { ProfileDesciption, ButtonGroup } from "./style";

const ProfilePage = () => {
  return (
    <Fragment>
      <HeaderTitle>MEU PERFIL</HeaderTitle>

      <PageContent>
        <ProfileDesciption>
          seja bem vindo a sua área. Nesse espaço você poderá editar e visualizar todas as informações relacionadas ao
          seu cadastro.
        </ProfileDesciption>
        <ProfileItem />
        <ButtonGroup>
          <ButtonOutline>Alterar dados</ButtonOutline>
          <ButtonOutline>Alterar senha</ButtonOutline>
          <ButtonOutline>Alterar e-mail</ButtonOutline>
        </ButtonGroup>
      </PageContent>
    </Fragment>
  );
};

export default ProfilePage;
