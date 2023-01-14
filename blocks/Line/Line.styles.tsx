import styled from "styled-components";
import { mapSpacingToTheme } from "../../helpers/spacings";
import { MarginTypes } from "../../types/spacings";

export type TLine = Pick<MarginTypes, "marginBottom" | "marginTop"> & {
  background?: string;
  width?: string;
};

export const Line = styled.div<TLine>`
  width: ${({ theme, width }) =>
    width
      ? mapSpacingToTheme(width, true)
      : theme.constants?.lineMobileWidth}px;
  background-color: ${(props) => props.background ?? "#fff"};
  height: 1px;
  margin-top: ${({ marginTop }) =>
    marginTop ? mapSpacingToTheme(marginTop) : 0}px;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? mapSpacingToTheme(marginBottom) : 0}px;
`;
