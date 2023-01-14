import React from "react";

type TSpacer = {
  height?: number;
};
const Spacer = ({ height }: TSpacer) => {
  return <div style={{ height: `${height}px` }}></div>;
};

export default Spacer;
