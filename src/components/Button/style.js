import styled from "styled-components";

export const BtnPrimary = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #61c5c0;
  color: #fff;
  height: 52px;
  padding: 8px 16px;
  font-size: 1rem;
  text-align: center;

  :hover {
    background-color: #258984;
  }
`;
export const BtnOutline = styled.button`
  border: 1px solid #6E7D9D;
  border-radius: 5px;
  background-color: transparent;
  color: #6E7D9D;
  height: 52px;
  padding: 8px 16px;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    margin-right: 4px;
  }
`;

