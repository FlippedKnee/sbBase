import React from "react";
import { elements } from "..";
import { Blok, useDynamicComponent } from "../../components/DynamicComponent";
import NextLink from "../../components/NextLink";
import { Asset, StoryblokLink } from "../../graphql/types";
import * as styles from "./Footer.styles";

type TFooterLinks = {
  link?: StoryblokLink;
  label?: string;
  icon?: Asset;
  isExternal?: boolean;
  textColor?: string;
};

type TFooter = {
  rightLinks?: TFooterLinks[];
  center?: Blok;
  textColor?: string;
  leftLinks?: TFooterLinks[];
};

const Footer = ({ rightLinks, center, leftLinks, textColor }: TFooter) => {
  const centerContent = useDynamicComponent(center, elements);
  return (
    <styles.Footer>
      <styles.LeftFooter>
        {leftLinks &&
          leftLinks?.map((left, i) => (
            <NextLink
              href={left.link?.cached_url}
              key={i}
              target={left?.isExternal ? "_blank" : "_self"}
            >
              <styles.FooterLink
                href={left.link?.cached_url}
                target={left?.isExternal ? "_blank" : "_self"}
                color={textColor}
              >
                <p>{left.label}</p>
                {left.icon?.filename && (
                  <styles.FooterImageConatainer>
                    <styles.FooterImage
                      src={left.icon?.filename ?? ""}
                      // alt={image?.alt || ""}
                      layout="fill"
                      objectFit={"contain"}
                    />
                  </styles.FooterImageConatainer>
                )}
              </styles.FooterLink>
            </NextLink>
          ))}
      </styles.LeftFooter>
      <styles.CenterFooter>{centerContent}</styles.CenterFooter>
      <styles.RightFooter>
        {rightLinks?.map((right, i) => (
          <NextLink
            href={right.link?.cached_url}
            key={i}
            target={right?.isExternal ? "_blank" : "_self"}
          >
            <styles.FooterLink
              color={textColor}
              href={right.link?.cached_url}
              target={right?.isExternal ? "_blank" : "_self"}
            >
              <p>{right.label}</p>
              {right.icon?.filename && (
                <styles.FooterImageConatainer>
                  <styles.FooterImage
                    src={right.icon?.filename ?? ""}
                    layout="fill"
                    objectFit={"contain"}
                  />
                </styles.FooterImageConatainer>
              )}
            </styles.FooterLink>
          </NextLink>
        ))}
      </styles.RightFooter>
    </styles.Footer>
  );
};

export default Footer;
