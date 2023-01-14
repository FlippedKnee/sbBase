import styled from "styled-components";

type TButton = {
  background?: string;
  color?: string;
  borderColor?: string;
  disabled?: boolean;
  borderRadius?: number;
};

export const ButtonContainer = styled.div<TButton>`
  transition: opacity 300ms ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: ${({ borderRadius }) => borderRadius ?? 8}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({ background }) => background};
  padding: 12px 24px;
  color: ${({ color }) => color};
  ${({ disabled }) => disabled && `opacity: 0.5;`}
  ${({ borderColor }) =>
    borderColor &&
    borderColor?.length > 0 &&
    `border: 2px solid ${borderColor};`}
`;

export const ButtonIcon = styled.span`
  margin-left: 8px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;
