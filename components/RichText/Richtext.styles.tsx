import styled from "styled-components";

type RichTextStyledProps = {
  textAlign?: string;
  textColor?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  maxWidth?: number;
  fontSize?: number;
  fontWeight?: string;
  linebreakHeight?: number;
  fontFamily?: string;
};

export const RichTextContainer = styled.div<RichTextStyledProps>`
  width: 100%;
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
  color: ${(props) => props.textColor ?? "#000"};
  text-align: ${(props) => props.textAlign ?? "initial"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
  margin-left: ${(props) => props.marginLeft ?? 0}px;
  margin-right: ${(props) => props.marginRight ?? 0}px;
  ${(props) =>
    props.maxWidth &&
    `
    max-width: ${props.maxWidth}px;`}
  > * {
    font-weight: ${(props) => props.fontWeight ?? "normal"};
    font-size: ${(props) => props.fontSize}px;
    color: ${(props) => props.textColor ?? "#000"};
  }
`;

export const TextDivider = styled.span<
  Pick<RichTextStyledProps, "linebreakHeight">
>`
  height: ${(props) => props.linebreakHeight}px;
  display: block;
`;
