import React, { useState, useEffect } from "react";
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    if (!window) return;
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
      setClientHeight(window.innerHeight);
      setClientWidth(window.innerWidth);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  useEffect(() => {
    if (!window) return;
    const updatePosition = () => {
      setClientHeight(window.innerHeight);
    };
    window.addEventListener("resize", updatePosition);
    updatePosition();
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return [scrollPosition, clientHeight, clientWidth];
};

export default useScrollPosition;
