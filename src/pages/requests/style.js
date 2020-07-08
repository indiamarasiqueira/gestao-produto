import styled from "styled-components";
import { colors, breakpoints, layout } from "../../styles/variable";

export const RequestContainer = styled.div`
  padding: ${layout.gap}px;

  hr {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
  }
`;

export const RequestHeader = styled.div`
  display: grid;
  grid-column: auto;
  grid-gap: ${layout.gap}px;

  @media all and (min-width: ${breakpoints.mobile}px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
export const Title = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  padding-top: ${layout.gapLarge}px;
`;

export const RequestAll = styled.p`
  color: ${colors.secundary};
  background: none;
  border: none;
  text-decoration: underline;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
`;
export const MainRequest = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media all and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr auto;
    line-height: 1.3;
    padding-bottom: ${layout.gapLarge}px;
    margin-bottom: ${layout.gapLarge}px;
  }
`;

export const RequestDescription = styled.div`
  margin-bottom: ${layout.gap}px;
`;

export const RequestDate = styled.p`
  padding-top: ${layout.gapSmall}px;
  font-size: 14px;
  margin-top: 40px;
`;
export const RequestId = styled.h4`
  padding-top: ${layout.gapSmall}px;
  color: ${colors.primary};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: ${layout.gapMedium}px;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${layout.gapSmall}px;
  margin-bottom: ${layout.gap}px;

  @media all and (min-width: ${breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }

  svg {
    margin-right: ${layout.gapSmall}px;
  }
`;
