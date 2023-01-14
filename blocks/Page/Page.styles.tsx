import styled from "styled-components";
import bg from "./asset/bKGRUND.jpg";
export type TPageContainer = {
  maxWidth?: number;
  background?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  footerOffset?: number;
  headerOffset?: number;
  // backgroundImage?: string;
};

export const PageContainer = styled.div<TPageContainer>`
  ${(props) => props.background && `background-color: ${props.background}`};

  padding: ${(props) => {
    const x = props.paddingHorizontal ?? 0;
    const y = props.paddingVertical ?? 0;
    return `${y}px ${x}px`;
  }};
  /* background: #131417; */

  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageChildrenContainer = styled.div<TPageContainer>`
  width: calc(100% - 16px);
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "unset")};
  margin: 0 auto;
  /* background: ${({ background }) => background ?? "#16171a"}; */
  margin: 0 24px 24px;
  min-height: 100vh;
  padding: 64px 24px;
  border-radius: 4px;
  z-index: 3;

  @media (min-width: ${(props) => props.theme.mediaQuery.mediaMinSmall}) {
    width: calc(100% - 36px);
    padding: 36px;
  }
  @media (min-width: ${(props) => props.theme.mediaQuery.mediaMinMedium}) {
    width: calc(100% - 64px);
    padding: 36px 64px;
  }
`;
