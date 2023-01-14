import React from "react";

import { elements } from "..";
import {
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import * as styles from "./Section.styles";

export type TSection = BlokItem & styles.TSectionContainer;

const Section = ({ body, ...props }: TSection) => {
  const bodyContent = useDynamicComponent(body, elements);
  return (
    <styles.SectionContainer {...props}>{bodyContent}</styles.SectionContainer>
  );
};

export default Section;
