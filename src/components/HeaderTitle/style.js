import styled from "styled-components";

import { breakpoints, colors, layout } from "../../styles/variable";

export const Title = styled.h1`
  color: ${colors.primary};
  padding: ${layout.gap}px;
  margin-top: ${layout.gap}px;
  font-weight: bold;
  font-size: 24px;

  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    padding: ${layout.gap}px ${layout.gapLarge}px;
  }
`;
