import styled from "styled-components";
import { breakpoints, colors } from "../styles/variable";

export const MainApp = styled.div`
  border: 1px solid ${colors.greyLight};
  background-color: ${colors.white};

  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;
export const MainLayout = styled.div`
  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    /* padding-left: 24px; */
  }
`;
