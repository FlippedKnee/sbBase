import styled from "styled-components";

import { LayoutStyles, TLayoutStyles } from "../../styles/layoutStyles";
import { projectTheme } from "../../theme";

export type TSectionContainer = TLayoutStyles & {
  maxWidth: string;
  borderRadius?: string;
  border?: string;
  keepCenter?: boolean;
};

export const SectionContainer = styled.div<TSectionContainer>`
  display: flex;
  flex-direction: column;
  ${LayoutStyles};
  max-width: ${({ maxWidth }) => maxWidth}px;
  ${({ borderRadius }) =>
    borderRadius && `overflow:hidden; border-radius:${borderRadius}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ keepCenter }) =>
    keepCenter &&
    `
  margin-right: auto;
  margin-left: auto;
  `}
  @media screen and (min-width: ${({ theme }) =>
    theme.mediaQuery?.mediaMinMedium}) {
    margin-right: auto;
    margin-left: auto;
  }
`;
