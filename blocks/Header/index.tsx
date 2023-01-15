import Image from "next/image";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import ImageComponent from "../../components/Image";
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
  background?: string;
  maxWidth?: string;
  footerLinks?: THeaderLinks[];
  logoWidth?: string;
  logoHeight?: string;
};
const Logo = () => (
  <svg
    width="42"
    height="38"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="55" height="71" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_123_15"
          transform="translate(-0.0020202) scale(0.00333568 0.00258398)"
        />
      </pattern>
      <image
        id="image0_123_15"
        width="301"
        height="387"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const Header = ({
  logo,
  links,
  linksColor,
  background,
  maxWidth,
  footerLinks,
  logoHeight,
  logoWidth,
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
