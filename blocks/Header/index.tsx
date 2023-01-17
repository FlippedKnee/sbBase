import Image from "next/image";
import React, { useState } from "react";
import NextLink from "../../components/NextLink";
import { Asset, StoryblokLink } from "../../graphql/types";
import useScrollPosition from "../../hooks/useScroll";
import * as styles from "./Header.styles";

type THeaderLinks = {
  link?: StoryblokLink;
  label?: string;
  icon?: Asset;
  isExternal?: boolean;
};

type THeader = {
  logo?: Asset;
  links?: THeaderLinks[];
  linksColor?: string;
  hoverColor?: string;
  background?: string;
  maxWidth?: string;
  footerLinks?: THeaderLinks[];
  logoWidth?: string;
  logoHeight?: string;
};

const Header = ({
  logo,
  links,
  linksColor,
  background,
  maxWidth,
  footerLinks,
  logoHeight,
  logoWidth,
  hoverColor,
}: THeader) => {
  const [scroll, height, width] = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <styles.HeaderContainer background={background}>
      <styles.HeaderContent color={linksColor} maxWidth={maxWidth}>
        <div style={{ display: "grid", placeContent: "center" }}>
          <NextLink href="/">
            <a href={"/"}>
              <styles.LogoImageContainer width={logoWidth} height={logoHeight}>
                <Image
                  src={logo?.filename ?? ""}
                  // alt={image?.alt || ""}
                  layout="fill"
                  objectFit={"contain"}
                />
              </styles.LogoImageContainer>
            </a>
          </NextLink>
        </div>
        <styles.HeaderLinks isOpen={isOpen} background={background}>
          {links?.map((link, i) => (
            <NextLink href={link.link?.cached_url} key={i}>
              <styles.HeaderLink
                href={link.link?.cached_url}
                color={linksColor}
                onClick={() => setIsOpen(false)}
              >
                {link.icon?.filename && (
                  <styles.HeaderLinkIcon showOnSide={isOpen}>
                    <styles.Imagee
                      showOnSide={isOpen}
                      src={link.icon?.filename ?? ""}
                      // alt={image?.alt || ""}
                      layout="fill"
                      objectFit={"contain"}
                    />
                  </styles.HeaderLinkIcon>
                )}
                <styles.HeaderLinkLabel
                  showOnSide={isOpen}
                  hasIcon={Boolean(link.icon?.filename)}
                  hoverColor={hoverColor}
                >
                  {link.label}
                </styles.HeaderLinkLabel>
              </styles.HeaderLink>
            </NextLink>
          ))}
          <styles.HeaderFooterLinks isOpen={isOpen}>
            {footerLinks?.map((footer, i) => (
              <NextLink
                href={footer.link?.cached_url}
                key={i}
                target={footer?.isExternal ? "_blank" : "_self"}
              >
                <styles.HeaderFooterLink
                  href={footer.link?.cached_url}
                  target={footer?.isExternal ? "_blank" : "_self"}
                  onClick={() => setIsOpen(false)}
                >
                  <p>{footer.label}</p>
                  {footer.icon?.filename && (
                    <span
                      style={{
                        position: "relative",
                        height: "18px",
                        width: "18px",
                      }}
                    >
                      <styles.FooterImage
                        src={footer.icon?.filename ?? ""}
                        // alt={image?.alt || ""}
                        layout="fill"
                        objectFit={"contain"}
                      />
                    </span>
                  )}
                </styles.HeaderFooterLink>
              </NextLink>
            ))}
          </styles.HeaderFooterLinks>
        </styles.HeaderLinks>
        <styles.MobileMenuContainer
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <styles.TopLine open={isOpen} color={"#D5DEDE"} />
          <styles.MidLine open={isOpen} color={"#D5DEDE"} />
          <styles.BottomLine open={isOpen} color={"#D5DEDE"} />
        </styles.MobileMenuContainer>

        <styles.Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      </styles.HeaderContent>
    </styles.HeaderContainer>
  );
};

export default Header;
