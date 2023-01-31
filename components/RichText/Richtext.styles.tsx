import styled from "styled-components";

type RichTextStyledProps = {
  textAlign?: string;
  textColor?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  maxWidth?: number;
  fontSize?: string;
  fontWeight?: string;
  linebreakHeight?: number;
  fontFamily?: string;
  noWrap?: boolean;
  lineHeight?: string;
  textAlignMobile?: string;
};

export const RichTextContainer = styled.div<RichTextStyledProps>`
  width: 100%;
  ${({ fontFamily }) =>
    fontFamily &&
    `font-family: ${fontFamily ?? `'M PLUS Rounded 1c', sans-serif`}`};
  color: ${(props) => props.textColor ?? "#000"};
  text-align: ${(props) => props.textAlignMobile ?? "initial"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
  margin-left: ${(props) => props.marginLeft ?? 0}px;
  margin-right: ${(props) => props.marginRight ?? 0}px;
  ${({ noWrap }) => noWrap && `white-space: nowrap`};
  ${(props) =>
    props.maxWidth &&
    `
    max-width: ${props.maxWidth}px;`}
  > * {
    ${({ fontFamily }) =>
      fontFamily &&
      `font-family: ${fontFamily ?? `'M PLUS Rounded 1c', sans-serif`}`};
    font-weight: ${(props) => props.fontWeight ?? "normal"};
    font-size: ${(props) =>
      props.fontSize?.split(",")?.[1] ?? props.fontSize?.split(",")?.[0]}px;
    color: ${(props) => props.textColor ?? "#000"};
    ${(props) =>
      props?.lineHeight &&
      `line-height: ${
        props?.lineHeight?.split(",")?.[1] ?? props?.lineHeight?.split(",")?.[0]
      }px`}
  }
  @media (min-width: ${(props) => props.theme.mediaQuery.mediaMinSmall}) {
    > * {
      font-size: ${(props) => props.fontSize?.split(",")[0]}px;
      ${(props) =>
        props?.lineHeight &&
        `line-height: ${props.lineHeight?.split(",")[0]}px`};
      text-align: ${(props) => props.textAlign ?? "initial"};
    }
  }
`;

export const TextDivider = styled.span<
  Pick<RichTextStyledProps, "linebreakHeight">
>`
  height: ${(props) => props.linebreakHeight}px;
  display: block;
`;
