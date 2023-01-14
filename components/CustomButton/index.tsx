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
};

const CustomButton = ({
  onClick,
  disabled,
  background,
  borderColor,
  textColor,
  label,
  borderRadius,
  icon,
}: TCustomButton) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <styles.ButtonContainer
      disabled={disabled}
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
