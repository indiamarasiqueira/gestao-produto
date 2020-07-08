import styled from "styled-components";

import { colors, breakpoints, layout } from "../../styles/variable";

export const Empty = styled.div`
  padding: ${layout.gap}px;
  color: ${colors.greenLight};
  text-align: center;
`;
export const OrderListItem = styled.div`
  padding: ${layout.gapLarge}px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  &:first-of-type {
    border-top-width: 0;
  }
`;
export const OrderDate = styled.p`
  color: ${colors.grey};
  font-size: 16px;
`;
export const OrderId = styled.p`
  padding-top: ${layout.gapSmall}px;
  color: ${colors.primary};
  font-size: 22px;
  font-weight: bold;
`;
export const OrderBox = styled.div`
  max-width: 700px;
  @media all and (min-width: ${breakpoints.mobile}px) {
    display: flex;
    align-items: center;
  }
`;
export const OrderInfo = styled.div`
  flex: 1;
  margin: ${layout.gap}px 0;
  color: ${colors.grey};
`;
export const OrderStatus = styled.p`
  color: ${colors.greenLight};
  margin-bottom: ${layout.gapSmall}px;
  font-weight: bold;
`;
export const ButtonOutline = styled.div`
  border-radius: 5px;
  border: 1px solid ${colors.secundary};
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secundary};
  padding: ${layout.gapSmall}px ${layout.gap}px;

  svg {
    margin-right: ${layout.gapSmall}px;
  }
`;
export const OrderAll = styled.button`
  color: ${colors.secundary};
  margin-bottom: ${layout.gapLarge}px;
  background: none;
  border: none;
  text-decoration: underline;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
`;
