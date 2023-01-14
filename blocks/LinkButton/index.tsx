import React from "react";
import CustomButton from "../../components/CustomButton";
import NextLink from "../../components/NextLink";
import { StoryblokLink } from "../../graphql/types";

type TLinkButton = {
  link?: StoryblokLink;
  background?: string;
  color?: string;
  label?: string;
  borderRadius?: number;
};

const LinkBUtton = ({
  link,
  background,
  color,
  label,
  borderRadius,
}: TLinkButton) => {
  return (
    <NextLink href={link?.cached_url}>
      <a href={link?.cached_url}>
        <CustomButton
          label={label}
          background={background}
          textColor={color}
          borderRadius={borderRadius}
        />
      </a>
    </NextLink>
  );
};

export default LinkBUtton;
