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
};

const Hero = ({ image, backgroundImage, text }: THero) => {
  const textContent = useDynamicComponent(text, elements);
  const [initial, setIniital] = useState(false);
  useEffect(() => {
    if (!initial) setIniital(true);
  }, []);
  return (
    <styles.HeroWrapper backgroundImage={backgroundImage?.filename}>
      <styles.HeroContainer>
        <styles.HeroText>{textContent}</styles.HeroText>
        <styles.HeroImage>
          <ImageComponent image={image} height={350} width={225} />
        </styles.HeroImage>
      </styles.HeroContainer>
    </styles.HeroWrapper>
  );
};

export default Hero;

export const Test = styled.p`
  font-weight: 400;
  font-size: 126px;
  line-height: 164px;
  /* identical to box height */

  color: #161719;

  text-shadow: -1px 1px 2px rgba(9, 9, 10, 0.2),
    1px -1px 2px rgba(9, 9, 10, 0.2), -1px -1px 2px rgba(35, 37, 40, 0.9),
    1px 1px 3px rgba(9, 9, 10, 0.9);
`;
