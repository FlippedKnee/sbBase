import styled from "styled-components";

export type TImageBox = {
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
};

export const ImageBox = styled.div<TImageBox>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
  width: 100px;
  height: 100px;
`;
