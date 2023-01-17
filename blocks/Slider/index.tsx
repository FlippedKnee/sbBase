import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderImage from "../SliderImage";
import { Asset } from "../../graphql/types";

type TSlider = {
  background?: string;
  width?: string;
  height?: string;
  images?: Asset[];
  reverse?: boolean;
  borderRadius?: string;
};
const animation = { duration: 10000, easing: (t: number) => t };

export default function Slider({
  images,
  background,
  width,
  height,
  reverse,
  borderRadius,
}: TSlider) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: "auto", spacing: 15 },

    created(s) {
      s.moveToIdx(reverse ? -5 : 5, true, animation);
    },
    updated(s) {
      if (reverse) {
        s.moveToIdx(s.track.details.abs - 5, true, animation);
      } else {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
    animationEnded(s) {
      if (reverse) {
        s.moveToIdx(s.track.details.abs - 5, true, animation);
      } else {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
  });
  return (
    <div
      ref={ref}
      className="keen-slider"
      style={{ display: "flex", width: "100%" }}
    >
      {images?.map((image, i) => (
        <div
          className={`keen-slider__slide number-slide${i + 1}`}
          style={{
            maxWidth: `${width}px`,
            minWidth: `${width}px`,
            height: `${height}px`,
            borderRadius: borderRadius ?? 0,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "0 16px" }}>
            <SliderImage
              background={background}
              width={`${width}px`}
              height={`${height}px`}
              image={image}
              key={i}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
