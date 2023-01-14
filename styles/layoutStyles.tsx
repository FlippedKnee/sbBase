import { css } from "styled-components";

import { mapSpacingToTheme } from "../helpers/spacings";
import { MarginTypes, PaddingTypes } from "../types/spacings";

export type TLayoutStyles = MarginTypes &
  PaddingTypes & {
    background?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string; // justify-content: ;
    justifyContent?: string; // align-items
    textAlign?: string;
    width?: string;
    gap?: string;
  };

export const LayoutStyles = css<TLayoutStyles>`
  padding-top: ${({ paddingTop }) =>
    paddingTop ? `${mapSpacingToTheme(paddingTop, true)}` : 0}px;
  padding-right: ${({ paddingRight }) =>
    paddingRight ? `${mapSpacingToTheme(paddingRight, true)}` : 0}px;
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? `${mapSpacingToTheme(paddingBottom, true)}` : 0}px;
  padding-left: ${({ paddingLeft }) =>
    paddingLeft ? `${mapSpacingToTheme(paddingLeft, true)}` : 0}px;
  margin-top: ${({ marginTop }) =>
    marginTop ? `${mapSpacingToTheme(marginTop, true)}` : 0}px;
  margin-right: ${({ marginRight }) =>
    marginRight ? `${mapSpacingToTheme(marginRight, true)}` : 0}px;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${mapSpacingToTheme(marginBottom, true)}` : 0}px;
  margin-left: ${({ marginLeft }) =>
    marginLeft ? `${mapSpacingToTheme(marginLeft, true)}` : 0}px;

  background-color: ${(props) => props.background};
  text-align: ${({ textAlign }) => textAlign ?? "start"};

  justify-content: ${({ justifyContent }) => justifyContent ?? "flex-start"};
  align-items: ${({ alignItems }) => alignItems ?? "flex-start"};
  gap: ${({ gap }) => (gap ? `${mapSpacingToTheme(gap, true)}` : 0)}px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) =>
      theme.mediaQuery?.mediaMinMedium}) {
    padding-top: ${({ paddingTop }) =>
      paddingTop ? `${mapSpacingToTheme(paddingTop)}` : 0}px;
    padding-right: ${({ paddingRight }) =>
      paddingRight ? `${mapSpacingToTheme(paddingRight)}` : 0}px;
    padding-bottom: ${({ paddingBottom }) =>
      paddingBottom ? `${mapSpacingToTheme(paddingBottom)}` : 0}px;
    padding-left: ${({ paddingLeft }) =>
      paddingLeft ? `${mapSpacingToTheme(paddingLeft)}` : 0}px;
    margin-top: ${({ marginTop }) =>
      marginTop ? `${mapSpacingToTheme(marginTop)}` : 0}px;
    margin-right: ${({ marginRight }) =>
      marginRight ? `${mapSpacingToTheme(marginRight)}` : 0}px;
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? `${mapSpacingToTheme(marginBottom)}` : 0}px;
    margin-left: ${({ marginLeft }) =>
      marginLeft ? `${mapSpacingToTheme(marginLeft)}` : 0}px;
    display: ${({ display }) => display ?? "block"};
    ${({ flexDirection }) => `flex-direction: ${flexDirection}`};
    gap: ${({ gap }) => (gap ? `${mapSpacingToTheme(gap)}` : 0)}px;
  }
`;
