import styled from "styled-components";
type TDropDownHeader = {
  color?: string;
  open?: boolean;
};
export const DropdownContainer = styled.div<TDropDownHeader>`
  overflow: hidden;
  width: 100%;
  /* display: flex;
  
  justify-content: space-between; */
  /* border-bottom: 1px solid ${({ color }) => color}; */
`;

export const DropDownHeader = styled.div<TDropDownHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 24px;
  cursor: pointer;
  padding-bottom: 16px;
`;

export const DropDownLabel = styled.p<TDropDownHeader>`
  color: ${({ color }) => color};
  font-size: 24px;

  line-height: 32px;
`;

export const DropDownClose = styled.div<TDropDownHeader>`
  width: 24px;
  height: 24px;
  display: grid;
  place-content: center;

  &::after {
    content: "";
    width: 24px;
    height: 1px;
    background: ${({ color }) => color};
    rotate: 0deg;
  }

  &::before {
    content: "";
    width: 24px;
    height: 1px;
    background: ${({ color }) => color};
    rotate: ${({ open }) => (open ? "0deg" : "270deg")};
    transition: all 300ms ease-in-out;
  }
`;

type TDropDownChild = {
  open?: boolean;
};

export const DropDownChild = styled.div<TDropDownChild>`
  max-height: ${({ open }) => (open ? "500px" : 0)};
  transition: max-height 300ms ease;
`;
