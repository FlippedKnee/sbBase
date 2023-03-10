import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderImage from "../SliderImage";
import { Asset } from "../../graphql/types";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import { elements } from "..";
import styled, { useTheme } from "styled-components";
import TiltCard from "../TiltCard";
// @ts-ignore
import ChevronRight from "../../asset/ChevronRIght";
import ChevronLeft from "../../asset/ChevronLeft";
import * as style from "./Slider.styles";

type TSlider = {
  background?: string;
  width?: string;
  height?: string;
  images?: Asset[];
  reverse?: boolean;
  borderRadius?: string;
  items?: BlokItem;
  autoPlay?: boolean;
  loop?: boolean;
  slidesPerView?: number | "auto";
  largeDesktopSlidesPerView?: number | "auto";
  spacing?: number;
  mobileSlidesPerView?: number | "auto";
  sliderText?: Blok;
  origin?: number | "center" | "auto";
  mobileOrigin?: number | "center" | "auto";
  showControllers?: boolean;
  clickForNext?: boolean;
};
const animation = { duration: 10000, easing: (t: number) => t };

export default function Slider({
  images,
  background,
  width,
  height,
  reverse,
  borderRadius,
  items,
  autoPlay,
  loop,
  slidesPerView,
  mobileSlidesPerView,
  largeDesktopSlidesPerView,
  spacing,
  sliderText,
  origin,
  showControllers,
  mobileOrigin,
  clickForNext,
}: TSlider) {
  const itemContent = useDynamicComponent(items, elements);
  const sliderTextContent = useDynamicComponent(sliderText, elements);
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: loop,
    renderMode: "performance",
    drag: !autoPlay,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: slidesPerView, spacing: spacing, origin: origin },
      },
      "(min-width: 1400px)": {
        slides: {
          perView: largeDesktopSlidesPerView ?? slidesPerView,
          spacing: spacing,
          origin: origin,
        },
      },
    },
    slides: {
      perView: mobileSlidesPerView,
      spacing: spacing,
      origin: mobileOrigin,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(s) {
      if (autoPlay) {
        s.moveToIdx(reverse ? -5 : 5, true, animation);
      }
    },
    updated(s) {
      if (autoPlay) {
        if (reverse) {
          console.log(s);
          s.moveToIdx(s?.track?.details?.abs - 5, true, animation);
        } else {
          s.moveToIdx(s?.track?.details?.abs + 5, true, animation);
        }
      }
    },
    animationEnded(s) {
      if (autoPlay) {
        if (reverse) {
          s.moveToIdx(s?.track?.details?.abs - 5, true, animation);
        } else {
          s.moveToIdx(s?.track?.details?.abs + 5, true, animation);
        }
      }
    },
  });
  // @ts-ignore
  return (
    <>
      <SliderTextContainerMobile style={{ color: "white" }}>
        {sliderTextContent}
      </SliderTextContainerMobile>

      <SliderContainer>
        <div
          ref={ref}
          className="keen-slider"
          style={{ display: "flex", width: "100%" }}
        >
          {/* @ts-ignore */}
          {itemContent?.length &&
            /* @ts-ignore */
            itemContent?.map((image, i) => (
              <div
                className={`keen-slider__slide number-slide${i + 1}`}
                key={i}
                style={{
                  height: `auto`,
                  borderRadius: borderRadius ?? 0,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{ padding: "16px" }}
                  onClick={() => {
                    clickForNext && instanceRef?.current?.next();
                  }}
                >
                  {image}
                  {/* <SliderImage
              background={background}
              width={`${width}px`}
              height={`${height}px`}
              image={image}
              key={i}
            /> */}
                </div>
              </div>
            ))}
        </div>
        {showControllers && (
          <>
            {currentSlide > 0 && (
              <style.LeftController
                onClick={() => {
                  instanceRef?.current?.prev();
                }}
              >
                <ChevronLeft color={"#ffffff"} width={"30"} height={"100"} />
              </style.LeftController>
            )}
            {/* @ts-ignore */}
            {currentSlide < itemContent?.length - 1 && (
              <style.RightController
                onClick={() => {
                  instanceRef?.current?.next();
                }}
              >
                <ChevronRight color={"#ffffff"} width={"30"} height={"100"} />
              </style.RightController>
            )}
          </>
        )}
      </SliderContainer>
    </>
  );
}

export const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0 -16px;
  > * {
    grid-area: 1/1/1/1;
  }
`;

export const SliderTextContainer = styled.div`
  align-self: center;
  padding: 0 16px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const SliderTextContainerMobile = styled.div`
  padding: 0 16px;
  > * {
    max-width: 100%;
  }
`;
