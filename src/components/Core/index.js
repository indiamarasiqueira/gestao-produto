import styled from "styled-components";
import { layout, breakpoints } from "../../styles/variable";

export const PageContent = styled.div`
  padding: ${layout.gap}px;

  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    padding: ${layout.gapLarge}px;
  }
`;
