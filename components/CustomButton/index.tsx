import React, { useState } from "react";
import * as styles from "./CustomButton.styles";

type TCustomButton = {
  background?: string;
  textColor?: string;
  onClick?: () => void;
  label?: string;
  icon?: any;
  borderColor?: string;
  disabled?: boolean;
  borderRadius?: number;
  fullWidth?: boolean;
  fontSize?: number;
  height?: number;
  justify?: string;
};

const CustomButton = ({
  onClick,
  disabled,
  background,
  fullWidth,
  borderColor,
  textColor,
  label,
  borderRadius,
  icon,
  height,
  fontSize,
  justify,
}: TCustomButton) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <styles.ButtonContainer
      disabled={disabled}
      fontSize={fontSize}
      height={height}
      justify={justify}
      fullWidth={fullWidth}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={disabled ? () => {} : onClick}
      background={background}
      color={textColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      style={{
        opacity: isPressed ? "0.5" : disabled ? "0.3" : 1,
      }}
    >
      <span>{label}</span>
      {icon && <span> {icon}</span>}
    </styles.ButtonContainer>
  );
};

export default CustomButton;
