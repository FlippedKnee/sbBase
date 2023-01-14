import styled from "styled-components";

import { LayoutStyles, TLayoutStyles } from "../../styles/layoutStyles";
import { projectTheme } from "../../theme";

export type TSectionContainer = TLayoutStyles & {
  maxWidth: string;
};

export const SectionContainer = styled.div<TSectionContainer>`
  display: flex;
  flex-direction: column;
  ${LayoutStyles};
  max-width: ${({ maxWidth }) => maxWidth}px;
  @media screen and (min-width: ${({ theme }) =>
      theme.mediaQuery?.mediaMinMedium}) {
    margin-right: auto;
    margin-left: auto;
  }
`;
