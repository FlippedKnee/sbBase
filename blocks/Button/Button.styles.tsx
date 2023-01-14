import styled from "styled-components";

type TButton = {
  background?: string;
  color?: string;
  borderColor?: string;
};

export const ButtonContainer = styled.a<TButton>`
  transition: opacity 300ms ease;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  padding: 8px 12px;
  color: ${({ color }) => color};
  margin: 16px 0;
  ${({ borderColor }) =>
    borderColor &&
    borderColor?.length > 0 &&
    `border: 2px solid ${borderColor};`}
  border-radius: 100px;
`;

export const ButtonIcon = styled.span`
  margin-left: 8px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;
