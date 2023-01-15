import styled from "styled-components";

import { LayoutStyles, TLayoutStyles } from "../../styles/layoutStyles";

export type TInnerSectionContainer = TLayoutStyles & {
  width?: string;
  alignSelf?: string;
  flex?: string;
  wrap?: boolean;
  mobileFlexDirection?: string;
};

export const InnerSectionContainer = styled.div<TInnerSectionContainer>`
  ${LayoutStyles}
  flex-basis: ${({ width }) => width ?? "100%"};
  display: ${({ display }) => display ?? "block"};
  ${({ flexDirection, mobileFlexDirection }) =>
    `flex-direction: ${mobileFlexDirection ?? flexDirection}`};
  max-height: 100%;
  align-self: ${({ alignSelf }) => alignSelf ?? "unset"};
  /* margin: 0 auto; */
  flex: ${({ flex }) => flex ?? "unset"};
  ${({ wrap }) => wrap && `flex-wrap: wrap`};
  @media (min-width: ${(props) => props.theme.mediaQuery.mediaMinSmall}) {
    ${({ flexDirection }) => `flex-direction: ${flexDirection}`};
  }
`;
