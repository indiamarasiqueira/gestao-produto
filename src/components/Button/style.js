import styled from "styled-components";

import { colors, layout } from "../../styles/variable";

export const BtnPrimary = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${colors.greenLight};
  color: ${colors.white};
  height: 52px;
  padding: ${layout.gapSmall}px ${layout.gap}px;
  font-size: 1rem;
  text-align: center;

  :hover {
    background-color: ${colors.greenDark};
  }
`;
export const BtnOutline = styled.button`
  border: 1px solid ${colors.secundary};
  border-radius: 5px;
  background-color: transparent;
  color: ${colors.secundary};
  height: 52px;
  padding: ${layout.gapSmall}px ${layout.gap}px;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: ${layout.gapSmall}px;
  }
`;
