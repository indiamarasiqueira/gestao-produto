import styled from "styled-components";

export const OrderMenu = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 3fr ;
  height: 100%;

   @media all and ( max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;



 





