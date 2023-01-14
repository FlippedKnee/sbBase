import React from "react";
import { elements } from "..";
import {
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import * as styles from "./IconText.styles";

export type TIconTextBlock = BlokItem & {
  image?: Asset;
};
const IconText = ({ image, body }: TIconTextBlock) => {
  const bodyContent = useDynamicComponent(body, elements);
  return (
    <styles.IconTextContainer>
      <styles.IconContainer>
        <ImageComponent image={image} height={64} width={64} contain={true} />
      </styles.IconContainer>
      <styles.IconText>{bodyContent}</styles.IconText>
    </styles.IconTextContainer>
  );
};

export default IconText;
