import styled from "styled-components";

export const BoxLabel = styled.label`
  padding: 8px 0;
  display: flex;
  justify-items: flex-start;

  input {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  input:checked ~ span {
    color: #61c5c0;
  }
`;
