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
  width?: string;
  height?: string;
  alignText?: string;
  justifyText?: string;
  borderRadius?: string;
};

const ImageAndText = ({
  reverse,
  text,
  image,
  height,
  width,
  alignText,
  justifyText,
  borderRadius,
}: TImageAndText) => {
  const textContent = useDynamicComponent(text, elements);
  return (
    <styles.ImageAndTextContainer
      reverse={reverse}
      borderRadius={borderRadius}
      height={height}
      width={width}
    >
      <styles.ImgContainer reverse={reverse} borderRadius={borderRadius}>
        <ImageComponent image={image} />
      </styles.ImgContainer>
      <styles.TextContainer
        reverse={reverse}
        alignText={alignText}
        justifyText={justifyText}
      >
        {textContent}
      </styles.TextContainer>
    </styles.ImageAndTextContainer>
  );
};

export default ImageAndText;
