import styled from "styled-components";

export const MenuMain = styled.button`
  
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px 16px;
  border: none;
  background: #7281A0;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.2s ease-out;
  height: 48px;

  :hover{
    color: #7281A0;
    background: #F4F4F4;
  }

`;
export const BoxIcon = styled.div`
  display: inline-block;
  margin-right: 8px;
  height: 24px;
`;
export const MainMenu = styled.div`
  color: #717171;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;

   @media all and (min-width: 600px) {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    width: 400px;
    height: 100%;
    position: fixed;
  }
`;

// User
export const UserInfo = styled.div`
  padding: 16px 0;
`;
export const UserInfoName = styled.p`
  margin-bottom: 8px;
`;
export const UserInfoEmail = styled.p``;
// Menu
export const MenuList = styled.nav`
   
`;

export const MenuListItem = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  :hover{
    color: #707070;
    background: #F4F4F4;
  }
`;
export const MenuIconImage = styled.i`
  padding-left: 4px;
  padding-right: 16px;
`;
