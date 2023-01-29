import React from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import styled from "styled-components";

export type TFaq = BlokItem & {
  items?: Blok;
  title?: Blok;
};
const Faq = ({ items, title }: TFaq) => {
  const itemContent = useDynamicComponent(items, elements);
  const titleContent = useDynamicComponent(title, elements);
  return (
    <FaqContainer>
      <FaqTitle>{titleContent}</FaqTitle>
      {itemContent}
    </FaqContainer>
  );
};

export default Faq;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
export const FaqTitle = styled.div``;
