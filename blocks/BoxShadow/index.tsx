import React from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import * as styles from "./BoxShadow.styles";
type TExampleImage = BlokItem & {
  image?: Asset;
  background?: string;
  text?: Blok;
};

const ExampleImage = ({ image, background, text }: TExampleImage) => {
  const textContent = useDynamicComponent(text, elements);
  return (
    <styles.ExampleImageContainer background={background}>
      {image && (
        <styles.ImageContainer>
          <ImageComponent image={image} width={110} height={48} contain />
        </styles.ImageContainer>
      )}
      {textContent && textContent}
    </styles.ExampleImageContainer>
  );
};

export default ExampleImage;
