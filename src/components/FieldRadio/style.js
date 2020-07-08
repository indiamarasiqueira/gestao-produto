import styled from "styled-components";

import { colors, layout } from "../../styles/variable";

export const BoxLabel = styled.label`
  padding: ${layout.gapSmall}px 0;
  display: flex;
  justify-items: flex-start;

  input {
    width: 16px;
    height: 16px;
    margin-right: ${layout.gapSmall}px;
  }

  input:checked ~ span {
    color: ${colors.greenLight};
  }
`;
