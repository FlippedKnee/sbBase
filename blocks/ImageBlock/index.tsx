import React from "react";
import { BlokItem } from "../../components/DynamicComponent";

import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import * as styles from "./ImageBlock.styles";

export type TImageBlock = BlokItem & {
  image?: Asset;
  mobileImage?: Asset;
  fill?: boolean;
  aspectRatio?: string;
  fixedHeight?: string;
  objectPosition?: string;
  width?: string;
  aspectRatioMobile?: string;
  maxWidth?: string;
  maxHeight?: string;
  animate?: boolean;
  mobileWidth?: string;
  mobileMaxWidth?: string;
  mobileMaxHeight?: string;
};

const ImageBlock = ({
  image,
  fill,
  aspectRatio,
  fixedHeight,
  objectPosition,
  width,
  aspectRatioMobile,
  maxHeight,
  mobileImage,
  mobileMaxHeight,
  mobileMaxWidth,
  mobileWidth,
  maxWidth,
  animate,
}: TImageBlock) => {
  return (
    <styles.ImageBlockLayoutContainer
      width={width}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      mobileMaxWidth={mobileMaxWidth ?? maxWidth}
      mobileMaxHeight={mobileMaxHeight ?? maxHeight}
    >
      <styles.ImageBlockContainer
        imageAspectRatio={aspectRatio}
        fixedHeight={fixedHeight}
        objectPosition={objectPosition}
        imageAspectRatioMobile={aspectRatioMobile}
        animate={animate}
      >
        <ImageComponent
          image={mobileImage ? mobileImage : image}
          fill={fill}
          contain
        />
      </styles.ImageBlockContainer>
      <styles.DesktopImageBlockContainer
        imageAspectRatio={aspectRatio}
        fixedHeight={fixedHeight}
        objectPosition={objectPosition}
        imageAspectRatioMobile={aspectRatioMobile}
        animate={animate}
      >
        <ImageComponent image={image} fill={fill} contain />
      </styles.DesktopImageBlockContainer>
    </styles.ImageBlockLayoutContainer>
  );
};
export default ImageBlock;
