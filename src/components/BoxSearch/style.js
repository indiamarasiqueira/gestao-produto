import styled from "styled-components";

import { colors, breakpoints, layout } from "../../styles/variable";

export const Box = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
`;
export const InputText = styled.input`
  flex: 1;
  color: ${colors.primary};
  height: 52px;
  border-radius: 5px;
  border: 1px solid ${colors.secundary};
  font-size: 16px;

  ::placeholder {
    color: ${colors.secundary};
  }
`;
export const ButtonSearch = styled.button`
  background: ${colors.primary};
  border-radius: 5px;
  height: 52px;
  border: none;
  margin-left: ${layout.gap}px;
  padding: ${layout.gapSmall}px;
  color: ${colors.white};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (max-width: ${breakpoints.mobile}px) {
    .search-text {
      display: none;
    }
  }
`;
