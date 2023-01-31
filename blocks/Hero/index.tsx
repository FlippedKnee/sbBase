import React, { useEffect, useState } from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import styled from "styled-components";
import * as styles from "./Hero.styles";

export type THero = BlokItem & {
  image?: Asset;
  logo?: any;
  text?: Blok;
  backgroundImage?: Asset;
  video?: Asset;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  marginTop?: string;
  backgroundSize?: string;
  backgroundCenter?: boolean;
  contentZIndex?: number;
};

const Hero = ({
  image,
  backgroundImage,
  text,
  justifyContent,
  display,
  alignItems,
  marginTop,
  backgroundSize,
  backgroundCenter,
  contentZIndex,
}: THero) => {
  const textContent = useDynamicComponent(text, elements);
  const [initial, setIniital] = useState(false);
  useEffect(() => {
    if (!initial) setIniital(true);
  }, []);
  return (
    <styles.HeroWrapper
      marginTop={marginTop}
      backgroundImage={backgroundImage?.filename}
      backgroundSize={backgroundSize}
      backgroundCenter={backgroundCenter}
    >
      <styles.HeroContainer
        display={display}
        alignItems={alignItems}
        justifyContent={justifyContent}
      >
        <styles.HeroText contentZIndex={contentZIndex}>
          {textContent}
        </styles.HeroText>
        <styles.HeroImage>
          <ImageComponent image={image} height={350} width={225} />
        </styles.HeroImage>
      </styles.HeroContainer>
    </styles.HeroWrapper>
  );
};

export default Hero;
