import React, { ComponentType } from "react";
import { Editable } from "../Editable";

export type BlokItem = {
  component?: string;
  _uid?: string;
  _editable?: string;
  body?: Blok;
};

export type Blok = {
  blok?: BlokItem | BlokItem[];
};

export type BlockElements<T> = {
  [component: string]: ComponentType<T>;
};

function dynamicComponent<T>(
  blok: Blok | BlokItem,
  elements: BlockElements<T>
): React.ReactNode {
  if (!blok) return null;

  const blokArray = Array.isArray(blok) ? blok : [blok];

  return blokArray.map((blokItem) => {
    if (Array.isArray(blokItem)) {
      return dynamicComponent(blokItem as Blok, elements);
    }
    const Component = elements?.[blokItem.component];
    if (Component) {
      return (
        <Editable content={blokItem} key={blokItem._uid}>
          <Component {...blokItem} />
        </Editable>
      );
    }

    return <></>;
  });
}

export function useDynamicComponent<T>(
  blok?: Blok | BlokItem,
  bloks?: BlockElements<T>
) {
  if (!blok || !bloks) return null;
  const Component = dynamicComponent<T>(blok, bloks);
  return Component;
}
