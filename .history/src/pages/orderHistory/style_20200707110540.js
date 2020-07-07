import styled from "styled-components";

export const OrderMenu = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 340px 2fr ;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;

   @media all and ( max-width: 1250px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`;

 





