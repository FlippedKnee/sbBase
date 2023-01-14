import React from "react";
import { elements } from "..";
import { Blok, useDynamicComponent } from "../../components/DynamicComponent";
import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import * as styles from "./ImageAndText.styles";
type TImageAndText = {
  text?: Blok;
  image?: Asset;
  reverse?: boolean;
};

const ImageAndText = ({ reverse, text, image }: TImageAndText) => {
  const textContent = useDynamicComponent(text, elements);
  return (
    <styles.ImageAndTextContainer reverse={reverse}>
      <styles.ImgContainer reverse={reverse}>
        <ImageComponent image={image} />
      </styles.ImgContainer>
      <styles.TextContainer reverse={reverse}>
        {textContent}
      </styles.TextContainer>
    </styles.ImageAndTextContainer>
  );
};

export default ImageAndText;
