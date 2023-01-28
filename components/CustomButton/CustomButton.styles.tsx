import styled from "styled-components";

type TButton = {
  background?: string;
  color?: string;
  borderColor?: string;
  disabled?: boolean;
  borderRadius?: number;
  fullWidth?: boolean;
  fontSize?: number;
  height?: number;
  justify?: string;
};

export const ButtonContainer = styled.div<TButton>`
  transition: opacity 300ms ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: ${({ borderRadius }) => borderRadius ?? 8}px;
  display: inline-flex;
  align-items: center;
  justify-content: ${({ justify }) => justify ?? "center"};
  gap: 8px;
  ${({ fullWidth }) => fullWidth && `width: 100%`};
  ${({ height }) => height && `height: ${height}px`};
  background: ${({ background }) => background};
  padding: 10px 24px;
  color: ${({ color }) => color};
  ${({ disabled }) => disabled && `opacity: 0.5;`}
  ${({ borderColor }) =>
    borderColor &&
    borderColor?.length > 0 &&
    `border: 2px solid ${borderColor};`}
    >span {
    font-size: ${({ fontSize }) => fontSize ?? 16}px;
  }
`;

export const ButtonIcon = styled.span`
  margin-left: 8px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;
