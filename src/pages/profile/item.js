import React from "react";

import { ProfileList, ProfileListItem } from "./style";

const ProfileItem = () => {
  return (

      <ProfileList>
        <ProfileListItem>
          <p>
            <b>nome:</b> Caroline Melinda
          </p>
        </ProfileListItem>
        <ProfileListItem>
          <p>
            <b>Sobrenome:</b> Effting
          </p>
        </ProfileListItem>
        <ProfileListItem>
          <p>
            <b>data de nascimento:</b> 24/06/1988
          </p>
        </ProfileListItem>
        <ProfileListItem>
          <p>
            <b>Cpf:</b> 000.000.000
          </p>
        </ProfileListItem>
        <ProfileListItem>
          <p>
            <b>Gênero:</b> Feminino
          </p>
        </ProfileListItem>
        <ProfileListItem>
          <p>
            <b>e-mail:</b> effting.caroline@gmail.com
          </p>
        </ProfileListItem>
        <ProfileListItem>
          <p>
            <b>receber newsletter:</b>
          </p>
        </ProfileListItem>
      </ProfileList>

  );
};

export default ProfileItem;
