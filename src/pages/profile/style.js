import styled from "styled-components";


export const MenuProfile = styled.div`
  padding: 16px;

`;
export const ProfileDesciption = styled.p`
  padding-bottom: 30px;
`;
export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  transition: 1s;
  
   @media all and (min-width: 760px) {
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
  padding: 20px 0;
  transition: 1s;

  @media all and (min-width: 760px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    margin-top: 60px;
  }

`;

