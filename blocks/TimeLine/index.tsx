import React from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import * as styles from "./TimeLine.styles";

type TTimeLine = BlokItem & {
  date?: Blok;
  rightLabel?: string;
  leftLabel?: string;
};

const TimeLine = ({ date, body }: TTimeLine) => {
  const dateContent = useDynamicComponent(date, elements);
  const bodyContent = useDynamicComponent(body, elements);
  return (
    <styles.TimeLineContainer>
      <div>{dateContent}</div>
      <styles.TimeLineSeparator />
      <styles.TimeLineContent>{bodyContent}</styles.TimeLineContent>
    </styles.TimeLineContainer>
  );
};

export default TimeLine;
