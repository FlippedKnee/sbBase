import styled, { css, keyframes } from "styled-components";

type TPower = {
  animate?: boolean;
};

const slideIn = keyframes`
  0%{
    opacity: 0;
    transform: scale(1);
}
50% {
    opacity: 1;
    transform: scale(1.5);
}
100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const Power = styled.div<TPower>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  color: white;
  animation: ${slideIn} 500ms ease-in-out forwards;
`;
