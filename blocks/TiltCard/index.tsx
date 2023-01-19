import React from "react";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import { Asset } from "../../graphql/types";

type TTiltCard = BlokItem & {
  content?: Blok;
  glareEnable?: boolean;
  glareMaxOpacity?: string;
  tiltReverse?: boolean;
  tiltMaxAngleY?: string;
  tiltMaxAngleX?: string;
  transitionSpeed?: string;
  perspective?: string;
  backgroundImage?: Asset;
  width?: string;
  mobileWidth?: string;
  height?: string;
  mobileHeight?: string;
  borderColor?: string;
  borderRadius?: string;
};

const TiltCard = ({
  content,
  glareEnable,
  glareMaxOpacity,
  tiltReverse,
  tiltMaxAngleY,
  tiltMaxAngleX,
  transitionSpeed,
  perspective,
  backgroundImage,
  width,
  mobileWidth,
  height,
  mobileHeight,
  borderRadius,
  borderColor,
}: TTiltCard) => {
  const Content = useDynamicComponent(content, elements);
  return (
    <Tilt
      glareEnable={glareEnable}
      glareMaxOpacity={Number(glareMaxOpacity)}
      tiltReverse={tiltReverse}
      tiltMaxAngleY={Number(tiltMaxAngleY)}
      tiltMaxAngleX={Number(tiltMaxAngleX)}
      transitionSpeed={Number(transitionSpeed)}
      perspective={Number(perspective)}
    >
      <Card
        backgroundImage={backgroundImage?.filename}
        width={width}
        mobileHeight={mobileHeight}
        mobileWidth={mobileWidth}
        height={height}
        borderColor={borderColor}
        borderRadius={borderRadius}
      >
        {Content}
      </Card>
    </Tilt>
  );
};

export default TiltCard;

type TTiltCardStyled = {
  backgroundImage?: string;
  mobileHeight?: string;
  height?: string;
  width?: string;
  mobileWidth?: string;
  borderColor?: string;
  borderRadius?: string;
};

export const Card = styled.div<TTiltCardStyled>`
  background: black;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  /* height: ${({ mobileHeight, height }) => `${mobileHeight}px`}; */
  /* width: ${({ mobileWidth, width }) => `${mobileWidth}px`}; */
  /* background-size: 100% auto; */
  background-repeat: no-repeat;
  aspect-ratio: 435 / 710;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => borderRadius};
  ${(props) => props.borderColor && ` border: 1px solid ${props.borderColor}`};
  padding: 16px;
  @media screen and (min-width: ${({ theme }) =>
      theme.mediaQuery?.mediaMinMedium}) {
    /* height: ${({ mobileHeight, height }) => `${height}px`}; */
    /* width: ${({ mobileWidth, width }) => `${width}px`}; */
  }
`;
