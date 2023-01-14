import React from "react";
import { BlokItem } from "../../components/DynamicComponent";

import * as styles from "./Line.styles";

export type TLine = BlokItem & styles.TLine;

const Line = ({ background, marginBottom, marginTop, width }: TLine) => {
  return (
    <styles.Line
      background={background}
      marginBottom={marginBottom}
      marginTop={marginTop}
      width={width}
    />
  );
};

export default Line;
