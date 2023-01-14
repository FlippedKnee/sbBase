import React from "react";

import { elements } from "..";
import {
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import * as styles from "./InnerSection.styles";

export type TInnerSection = BlokItem & styles.TInnerSectionContainer;

const InnerSection = ({ body, ...props }: TInnerSection) => {
  const bodyContent = useDynamicComponent(body, elements);

  return (
    <styles.InnerSectionContainer {...props}>
      {bodyContent}
    </styles.InnerSectionContainer>
  );
};

export default InnerSection;
