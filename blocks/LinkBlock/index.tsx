import React from "react";
import { elements } from "..";
import { Blok, useDynamicComponent } from "../../components/DynamicComponent";
import NextLink from "../../components/NextLink";
import { StoryblokLink } from "../../graphql/types";

type TLinkBlock = {
  child?: Blok;
  link?: StoryblokLink;
};

const LinkBlock = ({ link, child }: TLinkBlock) => {
  const ChildContent = useDynamicComponent(child, elements);
  return (
    <NextLink href={link?.cached_url} target={link?.target}>
      <a href={link?.cached_url}>{ChildContent}</a>
    </NextLink>
  );
};

export default LinkBlock;
