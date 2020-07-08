import styled from "styled-components";

import { colors, breakpoints, layout } from "../../styles/variable";

export const AddressList = styled.ul`
  width: 100%;

  @media all and (min-width: ${breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${layout.gap}px;
  }
`;
export const AddressListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: ${layout.gapLarge}px;
`;

export const AddressBox = styled.div`
  padding: 0 ${layout.gap}px ${layout.gap}px;
  flex-direction: column;
`;

export const AddressContainer = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.greyLight};
  border-radius: 5px;
  padding: 0 ${layout.gapMedium}px ${layout.gap}px;
  margin-bottom: ${layout.gap}px;
`;

// Comercial

export const AddressHeader = styled.div`
  border-bottom: 1px solid ${colors.greyLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
`;
export const AddressTitle = styled.h3`
  color: ${colors.primary};
  text-transform: uppercase;
`;
export const BtnEdit = styled.button`
  color: ${colors.greenLight};
  border: none;
  background: none;
  font-size: 1rem;
  text-decoration: underline;

  :hover {
    color: ${colors.greenDark};
  }
`;

// dados cadastrais

export const AddressUser = styled.div`
  padding: ${layout.gap}px 0;
  display: grid;
  grid-gap: 1rem;

  @media all and (min-width: ${breakpoints.desktop}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// dados endereco
export const AddressInfo = styled.div`
  border-top: 1px solid ${colors.greyLight};
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  padding: ${layout.gap}px 0;
`;
