import styled from "styled-components";
import { breakpoints } from "../styles/variable";

export const MainApp = styled.div`
  border: 1px solid #d8d8d8;
  background-color: #fff;

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
