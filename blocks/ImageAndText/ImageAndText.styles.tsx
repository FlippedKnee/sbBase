import styled from "styled-components";

type TImageAndTextContainer = {
  reverse?: boolean;
  alignText?: string;
  justifyText?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
};

export const ImageAndTextContainer = styled.div<TImageAndTextContainer>`
  display: grid;
  grid-template-rows: ${(props) => props?.height ?? "1fr"};
  grid-template-columns: ${(props) => props?.width ?? "1fr"};
  overflow: hidden;
  width: ${(props) => props?.width ?? "auto"};
  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius};
    overflow: hidden;
  `}
`;

export const ImgContainer = styled.div<TImageAndTextContainer>`
  grid-area: 1/1/1/1;
  z-index: 1;
  align-self: center;
  justify-self: center;
  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius};
    overflow: hidden;
  `}
`;
export const TextContainer = styled.div<TImageAndTextContainer>`
  grid-area: 1/1/1/1;
  z-index: 2;
  align-self: ${({ alignText }) => alignText};
  justify-self: ${({ justifyText }) => justifyText};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyText }) => justifyText};
  align-items: ${({ alignText }) => alignText};
`;
