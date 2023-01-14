import React from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import { Asset } from "../../graphql/types";
import * as styles from "./TopFeatures.styles";

export type TTopFeatures = BlokItem & {
  items?: Blok;
};

const TopFeatures = ({ items }: TTopFeatures) => {
  const itemContent = useDynamicComponent(items, elements);
  return <styles.TopFeats>{itemContent}</styles.TopFeats>;
};

export default TopFeatures;
