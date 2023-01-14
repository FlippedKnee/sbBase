import React, { useEffect, useRef } from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import useScrollPosition from "../../hooks/useScroll";
import * as styles from "./PartnersGrid.styles";
export type TPartnersGrid = BlokItem & { title: Blok };

const PartnersGrid = ({ body, title }: TPartnersGrid) => {
  const bodyContent = useDynamicComponent(body, elements);
  const titleContent = useDynamicComponent(title, elements);
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef(0);

  const scrollTo = (right?: boolean) => {
    if (!ref?.current) return;
    if (!window) return;

    const width = window.innerWidth;

    const scrollT = width > 1400 ? 1400 : width < 500 ? 300 : width;

    ref.current?.scrollTo({
      left: scrollRef?.current + (right ? scrollT : -scrollT),
      behavior: "smooth",
    });

    if (
      right &&
      ref?.current?.scrollWidth >
        ref?.current?.scrollLeft + (scrollRef?.current + width > 500 ? 200 : 0)
    ) {
      scrollRef.current = scrollRef?.current + (right ? scrollT : -scrollT);
    } else if (!right && scrollRef?.current > 0) {
      scrollRef.current = scrollRef?.current + (right ? scrollT : -scrollT);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <styles.ControllerContainer>
        {titleContent}
        <styles.Controller>
          <svg
            onClick={() => scrollTo(false)}
            style={{ cursor: "pointer" }}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2666 8.96693C14.5333 9.23359 14.6613 9.55582 14.6506 9.93359C14.6391 10.3114 14.5 10.6336 14.2333 10.9003L10.4666 14.6669L25.3333 14.6669C25.7111 14.6669 26.028 14.7949 26.284 15.0509C26.5391 15.306 26.6666 15.6225 26.6666 16.0003C26.6666 16.378 26.5391 16.6949 26.284 16.9509C26.028 17.206 25.7111 17.3336 25.3333 17.3336L10.4666 17.3336L14.2666 21.1336C14.5333 21.4003 14.6666 21.7171 14.6666 22.0843C14.6666 22.4505 14.5333 22.7669 14.2666 23.0336C14 23.3003 13.6831 23.4336 13.316 23.4336C12.9497 23.4336 12.6333 23.3003 12.3666 23.0336L6.26663 16.9336C6.13329 16.8003 6.03862 16.6558 5.98262 16.5003C5.92751 16.3447 5.89996 16.178 5.89996 16.0003C5.89996 15.8225 5.92751 15.6558 5.98262 15.5003C6.03862 15.3447 6.13329 15.2003 6.26663 15.0669L12.4 8.93359C12.6444 8.68915 12.9497 8.56693 13.316 8.56693C13.6831 8.56693 14 8.70026 14.2666 8.96693V8.96693Z"
              fill="#0FB292"
            />
          </svg>

          <svg
            width="32"
            style={{ cursor: "pointer" }}
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => scrollTo(true)}
          >
            <path
              d="M17.7334 23.0331C17.4667 22.7664 17.3387 22.4442 17.3494 22.0664C17.3609 21.6886 17.5 21.3664 17.7667 21.0997L21.5334 17.3331H6.66671C6.28893 17.3331 5.97204 17.2051 5.71604 16.9491C5.46093 16.694 5.33337 16.3775 5.33337 15.9997C5.33337 15.622 5.46093 15.3051 5.71604 15.0491C5.97204 14.794 6.28893 14.6664 6.66671 14.6664H21.5334L17.7334 10.8664C17.4667 10.5997 17.3334 10.2829 17.3334 9.91574C17.3334 9.54952 17.4667 9.23307 17.7334 8.96641C18 8.69974 18.3169 8.56641 18.684 8.56641C19.0503 8.56641 19.3667 8.69974 19.6334 8.96641L25.7334 15.0664C25.8667 15.1997 25.9614 15.3442 26.0174 15.4997C26.0725 15.6553 26.1 15.822 26.1 15.9997C26.1 16.1775 26.0725 16.3442 26.0174 16.4997C25.9614 16.6553 25.8667 16.7997 25.7334 16.9331L19.6 23.0664C19.3556 23.3108 19.0503 23.4331 18.684 23.4331C18.3169 23.4331 18 23.2997 17.7334 23.0331V23.0331Z"
              fill="#0FB292"
            />
          </svg>
        </styles.Controller>
      </styles.ControllerContainer>
      <styles.Grid ref={ref}>{bodyContent}</styles.Grid>
    </div>
  );
};

export default PartnersGrid;

export const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3 17.2748C13.1 17.0748 13.004 16.8331 13.012 16.5498C13.0207 16.2665 13.125 16.0248 13.325 15.8248L16.15 12.9998H5C4.71667 12.9998 4.479 12.9038 4.287 12.7118C4.09567 12.5205 4 12.2831 4 11.9998C4 11.7165 4.09567 11.4788 4.287 11.2868C4.479 11.0955 4.71667 10.9998 5 10.9998H16.15L13.3 8.1498C13.1 7.9498 13 7.71214 13 7.4368C13 7.16214 13.1 6.9248 13.3 6.7248C13.5 6.5248 13.7377 6.4248 14.013 6.4248C14.2877 6.4248 14.525 6.5248 14.725 6.7248L19.3 11.2998C19.4 11.3998 19.471 11.5081 19.513 11.6248C19.5543 11.7415 19.575 11.8665 19.575 11.9998C19.575 12.1331 19.5543 12.2581 19.513 12.3748C19.471 12.4915 19.4 12.5998 19.3 12.6998L14.7 17.2998C14.5167 17.4831 14.2877 17.5748 14.013 17.5748C13.7377 17.5748 13.5 17.4748 13.3 17.2748V17.2748Z"
      fill="#0FB292"
    />
  </svg>
);
