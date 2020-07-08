import styled from "styled-components";

import { breakpoints, layout } from "../../styles/variable";

export const ProfileDesciption = styled.p`
  padding-bottom: ${layout.gapLarge}px;
`;
export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  transition: 1s;

  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;
export const ProfileListItem = styled.li`
  list-style: none;
`;
export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: ${layout.gapMedium}px 0;
  transition: 1s;

  @media all and (min-width: ${breakpoints.mobileMenu}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    margin-top: 60px;
  }
`;
