import styled from "styled-components";

export const RightController = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.8;
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    right: 20%;
  }
`;
export const LeftController = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    left: 20%;
  }
`;
