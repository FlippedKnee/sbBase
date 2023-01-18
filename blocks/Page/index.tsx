import React, { useState, useEffect, useRef } from "react";
import * as styles from "./Page.styles";
import { TBlockElement, elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import { Asset } from "../../graphql/types";

export type TPage = BlokItem &
  styles.TPageContainer & {
    hero?: Blok;
    background?: string;
    header?: Blok;
    footer?: Blok;
    backgroundImage?: Asset;
    children?: React.ReactNode;
  };

const Page = (props: TPage) => {
  const body = useDynamicComponent<TBlockElement>(props.body, elements);
  const hero = useDynamicComponent<TBlockElement>(props.hero, elements);
  const header = useDynamicComponent<TBlockElement>(props.header, elements);
  const footer = useDynamicComponent<TBlockElement>(props.footer, elements);
  const pageRef = useRef();
  return (
    <styles.PageContainer
      background={props?.background}
      paddingHorizontal={props?.paddingHorizontal}
      paddingVertical={props?.paddingVertical}
      backgroundImage={props.backgroundImage?.filename}
      {...props}
    >
      {header}
      {hero}
      {/* @ts-ignore */}
      {body?.length ? (
        <styles.PageChildrenContainer
          maxWidth={props?.maxWidth}
          background={props?.background}
        >
          {body}
          {footer}
          {props?.children}
        </styles.PageChildrenContainer>
      ) : null}
    </styles.PageContainer>
  );
};

export default Page;
