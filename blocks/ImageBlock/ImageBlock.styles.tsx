import styled, { keyframes, css } from "styled-components";

import { TLayoutStyles } from "../../styles/layoutStyles";

type StyledImageProps = {
  imageAspectRatio?: string;
  imageAspectRatioMobile?: string;
  fixedHeight?: string;
  objectPosition?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  mobileWidth?: string;
  mobileMaxWidth?: string;
  mobileMaxHeight?: string;
  animate?: boolean;
  fullWidth?: boolean;
  borderRadius?: string;
  border?: boolean;
} & TLayoutStyles;

const slightFlip = keyframes`
  0%{
    transform: perspective(400px) rotateY(-10deg);
  }
  100%{
    transform: perspective(400px) rotateY(10deg);
  }
`;
export const ImageBlockContainer = styled.div<StyledImageProps>`
  position: relative;
  /* aspect-ratio: ${({ imageAspectRatioMobile, imageAspectRatio }) =>
    imageAspectRatioMobile || imageAspectRatio || "4 / 3"}; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  /* @TODO: do they want to control this? */
  /* & > img {
    object-position: ${({ objectPosition }) =>
    objectPosition ?? "initial"}!important;
  } */

  /* @media screen and (min-width: ${({ theme }) =>
    theme.mediaQuery?.mediaMinMedium}) {
    aspect-ratio: ${({ imageAspectRatio, imageAspectRatioMobile }) =>
    imageAspectRatio || imageAspectRatioMobile || "4 / 3"};
  } */
  animation: ${({ animate }) =>
    animate
      ? css`
          ${slightFlip} 3000ms ease-in-out infinite alternate
        `
      : ""}; /* rotate: 45deg; */

  ${({ fullWidth }) =>
    fullWidth &&
    `  > span {
    width: 100% !important;
  };`}

  @media (min-width: 991px) {
    display: none;
  }
`;

export const DesktopImageBlockContainer = styled(ImageBlockContainer)`
  display: none;

  @media (min-width: 991px) {
    display: block;
  }
`;

export const ImageBlockLayoutContainer = styled.div<StyledImageProps>`
  width: ${({ mobileWidth }) => mobileWidth ?? "100%"};
  max-width: ${({ mobileMaxWidth }) => mobileMaxWidth ?? "100%"};
  max-height: ${({ mobileMaxHeight }) => mobileMaxHeight ?? "100%"};
  overflow: hidden;
  ${({ borderRadius }) => `border-radius: ${borderRadius}`};
  ${({ border }) =>
    border &&
    `
    border: 1px solid black;
  `}

  @media (min-width: 991px) {
    width: ${({ width }) => width ?? "100%"};
    max-width: ${({ maxWidth }) => maxWidth ?? "100%"};
    max-height: ${({ maxHeight }) => maxHeight ?? "100%"};
  }
`;
