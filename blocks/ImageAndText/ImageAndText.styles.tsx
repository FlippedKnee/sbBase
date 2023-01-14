import styled from "styled-components";

type TImageAndTextContainer = {
  reverse?: boolean;
};

export const ImageAndTextContainer = styled.div<TImageAndTextContainer>`
  display: grid;
  grid-template-rows: ${({ reverse }) => (reverse ? "0.5fr 1fr" : "1fr 0.5fr")};
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinSmall}) {
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    justify-content: space-around;
  }
`;

export const ImgContainer = styled.div<TImageAndTextContainer>`
  grid-area: ${({ reverse }) => (reverse ? "1/1/2/2" : "1/1/3/2")};
  z-index: 1;
  max-width: clamp(300px, 20vw, 50%);
  align-self: ${({ reverse }) => (reverse ? "start" : "end")};
  justify-self: ${({ reverse }) => (reverse ? "start" : "end")};
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinSmall}) {
    max-width: clamp(50%, 4.5vw, 500px);
  }
`;
export const TextContainer = styled.div<TImageAndTextContainer>`
  grid-area: ${({ reverse }) => (reverse ? "1/1/3/2" : "1/1/2/2")};
  z-index: 2;
  align-self: ${({ reverse }) => (reverse ? "end" : "start")};
  justify-self: center;
`;
