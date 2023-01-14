import React, { useState } from "react";
import ImageComponent from "../../components/Image";
import NextLink from "../../components/NextLink";
import { Asset, StoryblokLink } from "../../graphql/types";
import * as styles from "./Button.styles";

export type TButton = {
  label?: string;
  background?: string;
  textColor?: string;
  link?: StoryblokLink;
  borderColor?: string;
  linkIsExternal?: boolean;
  icon?: Asset;
  onClick?: () => void;
};

const Button = ({
  label,
  background,
  onClick,
  textColor,
  link,
  linkIsExternal,
  borderColor,
  icon,
}: TButton) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <NextLink href={link?.cached_url}>
      <styles.ButtonContainer
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={onClick}
        background={background}
        color={textColor}
        href={link?.cached_url}
        borderColor={borderColor}
        target={linkIsExternal ? "_blank" : "_self"}
        style={{
          opacity: isPressed ? "0.5" : 1,
        }}
      >
        {label}
        {icon && (
          <styles.ButtonIcon>
            <ImageComponent height={24} width={36} image={icon} />
          </styles.ButtonIcon>
        )}
      </styles.ButtonContainer>
    </NextLink>
  );
};

export default Button;
