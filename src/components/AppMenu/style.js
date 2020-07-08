import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px 16px;
  border: none;
  background: #7281a0;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.2s ease-out;
  height: 48px;

  :hover {
    color: #7281a0;
    background: #f4f4f4;
  }

  @media all and (min-width: 720px) {
    display: none;
  }
`;
export const BoxIcon = styled.div`
  display: inline-block;
  margin-right: 8px;
  height: 24px;
`;
export const MainMenu = styled.div`
  color: #717171;
  padding-left: 16px;
  margin-bottom: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  @media all and (max-width: 720px) {
    position: fixed;
    top: 48px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;

    display: ${(props) => (props.open ? "block" : "none")};
  }
`;

// User
export const UserInfo = styled.div`
  padding: 16px 8px 16px 0;
  margin-bottom: 16px;
`;
export const UserInfoName = styled.p`
  margin-bottom: 8px;
`;
export const UserInfoEmail = styled.p`
  font-size: 14px;
`;
// Menu
export const MenuList = styled.nav``;

export const MenuListItem = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;

  :hover {
    color: #6e7d9d;
    background-color: #f4f4f4;
  }

  ${(props) =>
    props.active &&
    css`
      color: #6e7d9d;
      background-color: #f4f4f4;
    `}
`;
export const MenuIconImage = styled.i`
  padding-left: 4px;
  padding-right: 16px;
`;
