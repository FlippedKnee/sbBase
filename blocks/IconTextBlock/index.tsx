import React from "react";
import { elements } from "..";
import {
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import * as styles from "./IconTextBlock.styles";

export type TIconTextBlock = BlokItem & {
  image?: Asset;
};

const IconTextBlock = ({ image, body }: TIconTextBlock) => {
  const bodyContent = useDynamicComponent(body, elements);
  return (
    <styles.IconTextBlockContainer>{bodyContent}</styles.IconTextBlockContainer>
  );
};

export default IconTextBlock;
