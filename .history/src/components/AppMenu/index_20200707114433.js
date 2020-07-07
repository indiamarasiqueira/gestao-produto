import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HistoryIcon from "@material-ui/icons/History";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CloseIcon from "@material-ui/icons/Close";

import ModalMenu from "../ModalMenu/index";

import {
  MenuMain,
  Button,
  BoxIcon,
  MainMenu,
  UserInfo,
  UserInfoName,
  UserInfoEmail,
  MenuList,
  MenuListItem,
  MenuIconImage,
} from "./style";

const AppMenu = () => {
  const history = useHistory();
  const [show, showModal] = useState(false);
  const navigate = (route) => {
    history.push(route);
    showModal(false);
  };

  return (
    <MenuMain>
      <Button onClick={() => showModal(!show)}>
        <BoxIcon>{show ? <CloseIcon /> : <MenuIcon />}</BoxIcon>
        menu
      </Button>
      <ModalMenu show={show}>
        <MainMenu>
          <UserInfo>
            <UserInfoName>Caroline Melinda W Effting</UserInfoName>
            <UserInfoEmail>effting.caroline@gmail.com</UserInfoEmail>
          </UserInfo>
          <MenuList>
            <MenuListItem onClick={() => navigate("/perfil")}>
              <MenuIconImage>
                <LockOpenIcon />
              </MenuIconImage>
              <span className="menu-label">meu perfil</span>
            </MenuListItem>
            <MenuListItem onClick={() => navigate("/pedidos")}>
              <MenuIconImage>
                <HistoryIcon />
              </MenuIconImage>
              <span className="menu-label">histórico de pedidos</span>
            </MenuListItem>
            <MenuListItem onClick={() => navigate("/localizacao")}>
              <MenuIconImage>
                <RoomOutlinedIcon />
              </MenuIconImage>
              <span className="menu-label">meus endereços</span>
            </MenuListItem>
            <MenuListItem onClick={() => navigate("/favoritos")}>
              <MenuIconImage>
                <FavoriteBorderIcon />
              </MenuIconImage>
              <span className="menu-label">lista de favoritos</span>
            </MenuListItem>
          </MenuList>
        </MainMenu>
      </ModalMenu>
    </MenuMain>
  );
};
export default AppMenu;
