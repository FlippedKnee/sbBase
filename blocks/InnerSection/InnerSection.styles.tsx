import styled from "styled-components";

import { LayoutStyles, TLayoutStyles } from "../../styles/layoutStyles";

export type TInnerSectionContainer = TLayoutStyles & {
  width?: string;
  alignSelf?: string;
  flex?: string;
  wrap?: boolean;
};

export const InnerSectionContainer = styled.div<TInnerSectionContainer>`
  ${LayoutStyles}
  flex-basis: ${({ width }) => width ?? "100%"};
  display: ${({ display }) => display ?? "block"};
  ${({ flexDirection }) => `flex-direction: ${flexDirection}`};
  max-height: 100%;
  align-self: ${({ alignSelf }) => alignSelf ?? "unset"};
  /* margin: 0 auto; */
  flex: ${({ flex }) => flex ?? "unset"};
  ${({ wrap }) => wrap && `flex-wrap: wrap`};
`;
