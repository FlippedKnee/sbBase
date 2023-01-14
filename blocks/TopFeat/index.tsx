import React from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import ImageComponent from "../../components/Image";
import { Asset } from "../../graphql/types";
import * as styles from "./TopFeat.styles";

export type TTopFeat = BlokItem & {
  image?: Asset;
  title?: string;
};
const TopFeat = ({ image, title, body }: TTopFeat) => {
  const bodyContent = useDynamicComponent(body, elements);
  return (
    <styles.TopFeatContainer>
      <>
        {image && <ImageComponent image={image} />}

        {bodyContent}
      </>
    </styles.TopFeatContainer>
  );
};

export default TopFeat;
