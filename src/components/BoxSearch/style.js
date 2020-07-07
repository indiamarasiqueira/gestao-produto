import styled from "styled-components";

export const Box = styled.form`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;

`;
export const InputText = styled.input`
  flex: 1;
  color: #7281a0;
  height: 52px;
  border-radius: 5px;
  border: 1px solid #6e7d9d;
  font-size: 16px;
  padding-left: 10px;
  
  ::placeholder {
    color: #6e7d9d;
  }
`;
export const ButtonSearch = styled.button`
  background: #7281a0;
  border-radius: 5px;
  height: 52px;
  border: none;
  margin-left: 16px;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 600px){
    .search-text{
      display: none;
    }
  }
`;

