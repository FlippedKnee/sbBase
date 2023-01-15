import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

type THeaderContainer = {
  maxWidth?: string;
  color?: string;
  background?: string;
  showFixedBackground?: boolean;
  showOnSide?: boolean;
  isOpen?: boolean;
};

type TShowOnSide = {
  showOnSide?: boolean;
  hasIcon?: boolean;
};

export const HeaderContainer = styled.div<THeaderContainer>`
  position: fixed;
  ${({ showFixedBackground, background }) =>
    showFixedBackground &&
    `
    background: ${background};
    box-shadow: 0 0 20px #000;
  `}

  top: 0;
  left: 0;
  width: 100%;

  z-index: 999;
`;

export const HeaderContent = styled.div<THeaderContainer>`
  max-width: ${({ maxWidth }) => maxWidth};
  color: ${({ color }) => color ?? "#fff"};
  margin: 0 auto;
  /* padding: 0 18px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: calc(100% - 40px);
  position: relative;
  gap: 36px;
  @media (min-width: ${(props) => props.theme.mediaQuery.mediaMinSmall}) {
    width: calc(100% - 36px);
    justify-content: flex-start;
    /* padding: 0 36px; */
  }
  @media (min-width: ${(props) => props.theme.mediaQuery.mediaMinMedium}) {
    width: calc(100% - 64px);
    /* padding: 0 64px; */
  }
`;

const slideIn = keyframes`
  0%{
    left: -300px;
  }
  100% {
    left: 0
  }
`;

export const HeaderLinks = styled.div<THeaderContainer>`
  display: flex;
  gap: 40px;
  align-items: center;
  flex: 1;

  animation: ${(props) =>
    props.isOpen
      ? css`
          ${slideIn} 300ms ease-in-out  forwards;
        `
      : ""};

  ${({ showOnSide, isOpen }) =>
    showOnSide &&
    !isOpen &&
    `
    display:none;
  
  `}

  @media (max-width:${({ theme }) => theme.mediaQuery.mediaMinSmall}) {
    display: none;
  }

  ${({ isOpen, background }) =>
    isOpen &&
    `
    position: fixed;
    top:0;
    margin-left: 0px;
    display:grid !important;
    flex-direction: column;
    align-content:flex-start;
    width: 300px;
    max-width: 80%;
    z-index:999;
    gap: 24px;
    background: ${background};
    box-shadow: 0 0 20px rgba(0,0,0,0.9);
    left:0;
    height: 100%;
    padding: 24px;
    overflow:hidden;
    transition: width 300ms ease;
    padding-top: 40px;
    
  
  `}
`;

type TLogoImageContainer = {
  width?: string;
  height?: string;
};
export const LogoImageContainer = styled.div<TLogoImageContainer>`
  position: relative;
  width: ${(props) => props?.width ?? 60}px;
  height: ${(props) => props?.height ?? 60}px;
`;

export const HeaderQuickLinks = styled.div<THeaderContainer>`
  display: none;
  ${({ showOnSide }) =>
    showOnSide &&
    `
    display: flex;
    gap: 40px;
    align-items: center;
    position: fixed;
    top:50vh;
    margin-left: -24px;
    flex-direction: column;
    background: #16171A;
    box-shadow: 0 0 20px rgba(0,0,0,0.9);
    width: 60px;
    padding: 12px;
    
    align-items: flex-start;
    justify-content:center;
    overflow:hidden;
    transition: width 300ms ease;
    border-radius: 16px;
    &:hover  {
    width: 150px
    }
  `}
`;

export const HeaderLinkLabel = styled.span<TShowOnSide>`
  display: block;
  margin-left: ${({ showOnSide, hasIcon }) =>
    !hasIcon ? 0 : showOnSide ? "20px" : "8px"};
  position: relative;
  &::after {
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    bottom: -10px;
    background: #fff;
    left: 0;
    transition: width 300ms ease;
  }

  &:hover {
    color: #e0cc81;
  }
`;
export const HeaderLink = styled.a<THeaderContainer>`
  color: ${({ color }) => color ?? "#fff"};
  font-size: 16px;
  /* height: 100%; */
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 50px;
  position: relative;

  &:hover ${HeaderLinkLabel} {
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
`;

export const HeaderLinkIcon = styled.span<TShowOnSide>`
  height: ${({ showOnSide }) => (showOnSide ? "32px" : "18px")} !important;
  width: ${({ showOnSide }) => (showOnSide ? "32px" : "18px")} !important;
  position: relative;
  display: grid;
  place-content: center;
  /* margin-right: 8px; */
  /* padding: 20px 32px; */
`;

export const Imagee = styled(Image)<TShowOnSide>`
  width: ${({ showOnSide }) => (showOnSide ? "32px" : "18px")} !important;
  height: ${({ showOnSide }) => (showOnSide ? "32px" : "18px")} !important;
  min-width: ${({ showOnSide }) => (showOnSide ? "32px" : "18px")} !important;
  min-height: ${({ showOnSide }) => (showOnSide ? "32px" : "18px")} !important;
`;

export const FooterImage = styled(Image)`
  width: 18px !important;
  height: 18px !important;
  min-width: 18px !important;
  min-height: 18px !important;
`;

export type TMenuLine = {
  open?: boolean;
  color?: string;
};

export const HeaderFooterLinks = styled.div<THeaderContainer>`
  display: none;
  ${({ isOpen }) =>
    isOpen &&
    `
  
  align-self: end;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`}
`;

export const HeaderFooterLink = styled.a`
  position: relative;
  display: flex;
  gap: 8px;
`;

export const MobileMenuContainer = styled.div`
  display: grid;
  place-content: center;
  cursor: pointer;
`;

export const MenuLine = styled.div<TMenuLine>`
  height: 2px;
  width: 20px;
  background: ${({ color, theme }) => color ?? theme?.palette?.black};
`;
export const MidLine = styled(MenuLine)`
  ${(props) => props.open && `opacity: 0;`}
  margin: 4px 0;
`;
export const TopLine = styled(MenuLine)`
  ${(props) => props.open && `rotate: 45deg;`}
  transform-origin: left;
  transition: rotate 300ms ease;
`;

export const BottomLine = styled(MenuLine)`
  ${(props) => props.open && `rotate: -45deg;`}
  transition: rotate 300ms ease;
  transform-origin: left;
`;

export const Overlay = styled.div<THeaderContainer>`
  z-index: 888;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  ${({ isOpen }) => isOpen && "display:block"};
  background: #000;
  opacity: 0.8;
`;
