import styled from "styled-components";
type TDropDownHeader = {
  color?: string;
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

export const DropDownLabel = styled.p`
  color: ${({ color }) => color};
  font-size: 24px;

  line-height: 32px;
`;

type TDropDownChild = {
  open?: boolean;
};

export const DropDownChild = styled.div<TDropDownChild>`
  max-height: ${({ open }) => (open ? "500px" : 0)};
  transition: max-height 300ms ease;
`;
