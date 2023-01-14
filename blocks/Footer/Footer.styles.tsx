import Image from "next/image";
import styled from "styled-components";

export const Footer = styled.footer`
  padding: 20px 0;
  border-top: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    flex-direction: row;
  }
`;

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  order: 3;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    flex-direction: row;
    gap: 16px;
    order: 3;
  }
`;
export const CenterFooter = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    order: 2;
  }
`;
export const LeftFooter = styled(RightFooter)`
  order: 1;
  @media (min-width: ${({ theme }) => theme.mediaQuery.mediaMinMedium}) {
    order: 2;
  }
`;

export const FooterImage = styled(Image)`
  width: 18px !important;
  height: 18px !important;
  min-width: 18px !important;
  min-height: 18px !important;
`;

export const FooterImageConatainer = styled.span`
  position: relative;
  height: 18px;
  width: 18px;
`;

export type TMenuLine = {
  open?: boolean;
  color?: string;
};

export const FooterLink = styled.a`
  position: relative;
  display: flex;
  gap: 4px;
  color: #c6cdcd;
  > * {
    font-size: 13px;
  }
`;
