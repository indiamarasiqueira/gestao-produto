import styled from "styled-components";

export const MainApp = styled.div`
  height: 100vh;
  @media all and (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 16px;
  }
`;
export const MainLayout = styled.div`
  @media all and (min-width: 720px) {
    padding-left: 24px;
  }
`;
