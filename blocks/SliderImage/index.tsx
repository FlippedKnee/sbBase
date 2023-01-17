import React from "react";
import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import * as style from "./SliderImage.styled";

type TSliderImage = {
  image?: Asset;
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
};

const SliderImage = ({
  image,
  width,
  height,
  borderRadius,
  background,
}: TSliderImage) => {
  return (
    <style.ImageBox
      width={width}
      height={height}
      borderRadius={borderRadius}
      background={background}
    >
      <ImageComponent image={image} fill />
    </style.ImageBox>
  );
};

export default SliderImage;
