import React, { Fragment } from "react";

import HeaderTitle from "../../components/HeaderTitle";
import ProfileItem from "./item";
import ButtonOutline from '../../components/Button/outline'

import { MenuProfile, ProfileDesciption, ButtonGroup } from "./style";


const ProfilePage = () => {
  return (
    <Fragment>
      <HeaderTitle>MEU PERFIL</HeaderTitle>
      <MenuProfile>
        <ProfileDesciption>
          Seja bem vindo a sua área. Nesse espaço você poderá editar e visualizar todas as informações relacionadas ao
          seu cadastro.
        </ProfileDesciption>
        <ProfileItem />
        <ButtonGroup>
          <ButtonOutline>Alterar dados</ButtonOutline>
          <ButtonOutline>Alterar senha</ButtonOutline>
          <ButtonOutline>Alterar e-mail</ButtonOutline>
        </ButtonGroup>
      </MenuProfile>
    </Fragment>
  );
};

export default ProfilePage;
 