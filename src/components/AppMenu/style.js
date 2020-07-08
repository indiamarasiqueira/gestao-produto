import styled, { css } from "styled-components";
import { breakpoints, colors, layout } from "../../styles/variable";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: ${layout.gap}px;
  border: none;
  background: ${colors.primary};
  width: 100%;
  color: ${colors.white};
  font-size: 16px;
  transition: all 0.2s ease-out;
  height: 48px;

  :hover {
    color: ${colors.primary};
    background: ${colors.white};
  }

  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    display: none;
  }
`;
export const BoxIcon = styled.div`
  display: inline-block;
  margin-right: ${layout.gapSmall}px;
  height: 24px;
`;
export const MainMenu = styled.div`
  color: ${colors.grey};
  padding-left: ${layout.gap}px;
  margin-bottom: ${layout.gap}px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  @media all and (max-width: ${breakpoints.mobileMenu}px) {
    position: fixed;
    top: 48px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.white};

    display: ${(props) => (props.open ? "block" : "none")};
  }

  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    padding-left: ${layout.gapLarge}px;
    margin-top: ${layout.gap}px;
  }
`;

// User
export const UserInfo = styled.div`
  padding: ${layout.gap}px ${layout.gapSmall}px ${layout.gap}px 0;
  margin-bottom: ${layout.gap}px;
`;
export const UserInfoName = styled.p`
  margin-bottom: ${layout.gapSmall}px;
`;
export const UserInfoEmail = styled.p`
  font-size: 14px;
`;
// Menu
export const MenuList = styled.nav``;

export const MenuListItem = styled.a`
  display: flex;
  align-items: center;
  padding: ${layout.gap}px 0;
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
  padding-left: ${layout.gapSmall}px;
  padding-right: ${layout.gap}px;
`;
