import styled, { keyframes, css } from "styled-components";
import { mapSpacingToTheme } from "../../helpers/spacings";
export type THeroContainer = {
  backgroundImage?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  marginTop?: string;
  backgroundSize?: string;
  backgroundCenter?: boolean;
};
const slightFlip = keyframes`
  0%{
    transform: perspective(400px) rotateY(-10deg) ;
  }
  
  100%{
    transform: perspective(400px) rotateY(10deg) rotateX(-2deg);
  }
`;
const slightFlipMobile = keyframes`
  0%{
    transform: perspective(400px) rotateY(-5deg) ;
  }
  
  100%{
    transform: perspective(400px) rotateY(5deg) ;
  }
`;
export const HeroWrapper = styled.div<THeroContainer>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  margin-top: ${(props) => mapSpacingToTheme(props?.marginTop, true)}px;
  ${({ backgroundImage, backgroundSize, backgroundCenter }) =>
    backgroundImage &&
    `
    background-repeat: no-repeat;
    background-size: ${backgroundSize};
    width: 100%;
    ${backgroundCenter && `background-position: center;`}
  `}
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    margin-top: ${(props) => mapSpacingToTheme(props?.marginTop)}px;
  }
`;

export const HeroContainer = styled.div<THeroContainer>`
  max-width: 1268px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 24px 0;
  padding-top: 60px;
  ${({ display }) => display && `display: ${display}`};
`;

export const HeroImage = styled.div`
  grid-column: 2;
  justify-self: end;
  align-self: center;
  z-index: 1;
  animation: ${slightFlipMobile} 3000ms ease infinite alternate;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    animation: ${slightFlip} 3000ms ease infinite alternate;
  }
`;

export const HeroLogo = styled.div`
  /* color: #e7d184; */
  color: #d5dede;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  z-index: 2;
  margin-bottom: 64px;
  text-align: center;
  font-size: 64px;
  width: 613px;
  height: 189px;
  background: #161719;
  box-shadow: 1px 1px 2px rgba(35, 37, 40, 0.3),
    -1px -1px 2px rgba(9, 9, 10, 0.5), inset -1px 1px 2px rgba(9, 9, 10, 0.2),
    inset 1px -1px 2px rgba(9, 9, 10, 0.2),
    inset -1px -1px 2px rgba(35, 37, 40, 0.9),
    inset 1px 1px 3px rgba(9, 9, 10, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
`;

export const HeroText = styled.div`
  grid-column: 1;
  justify-self: center;
  align-self: center;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

export const HeroBackground = styled.div`
  grid-area: 1/1/2/4;
  opacity: 0.5;
`;
