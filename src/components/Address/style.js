import styled from "styled-components";

export const AddressList = styled.ul`
  width: 100%;

  @media all and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`;
export const AddressListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AddressBox = styled.div`
  padding: 0 16px 16px;
  flex-direction: column;
`;

export const AddressContainer = styled.div`
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  padding: 0 24px 16px;
  margin-bottom: 16px;
`;

// Comercial

export const AddressHeader = styled.div`
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
`;
export const AddressTitle = styled.h3`
  color: #7281a0;
`;
export const BtnEdit = styled.button`
  color: #61c5c0;
  border: none;
  background: none;
  font-size: 1rem;

  :hover {
    color: #258984;
  }
`;

// dados cadastrais

export const AddressUser = styled.div`
  padding: 16px 0;
  display: grid;
  grid-gap: 1rem;

  @media all and (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// dados endereco
export const AddressInfo = styled.div`
  border-top: 1px solid #d8d8d8;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 0;
`;
