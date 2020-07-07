import styled from "styled-components";

export const Empty = styled.div`
  padding: 16px;
  color: #ccc;
  text-align: center;
`;
export const OrderList = styled.div`
  padding: 0 16px;
`;
export const OrderListItem = styled.div`
  padding: 32px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  &:first-of-type {
    border-top-width: 0;
  }

  
`;
export const OrderDate = styled.p`
  color: #707070;
  font-size: 16px;
`;
export const OrderId = styled.p`
  padding-top: 6px;
  color: #7281a0;
  font-size: 22px;
  font-weight: bold;
`;
export const OrderBox = styled.div`

  @media all and (min-width: 600px){
    display: flex;
    align-items: center;
  }
`;
export const OrderInfo = styled.div`
  flex: 1;
  margin: 16px 0;
  color: #707070;

`;
export const OrderStatus = styled.p`
  color: #61c5c0;
  margin-bottom: 4px;
  font-weight: bold;
`;
export const ButtonOutline = styled.div`
  border-radius: 5px;
  border: 1px solid #6e7d9d;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e7d9d;
  padding: 8px 16px;

  svg {
    margin-right: 8px;
  }
`;
export const OrderAll = styled.button`
  color: #6E7D9D;
  margin-bottom: 32px;
  background: none;
  border: none;
  text-decoration: underline;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
`;
