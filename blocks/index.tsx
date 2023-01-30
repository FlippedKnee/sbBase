import dynamic from "next/dynamic";
import { ComponentType } from "react";

import { TPage } from "../blocks/Page";
import { TLine } from "./Line";
import { TSection } from "./Section";
import { TImageBlock } from "./ImageBlock";
import { RichTextProps } from "../components/RichText";

const Page = dynamic(() => import("./Page"));
const Line = dynamic(() => import("./Line"));
const RichText = dynamic(() => import("../components/RichText"));
const Section = dynamic(() => import("./Section"));
const ImageBlock = dynamic(() => import("./ImageBlock"));
const InnerSection = dynamic(() => import("./InnerSection"));
const DropDown = dynamic(() => import("./Dropdown"));
const Hero = dynamic(() => import("./Hero"));
const TopFeat = dynamic(() => import("./TopFeat"));
const Faq = dynamic(() => import("./Faq"));
const TopFeatures = dynamic(() => import("./TopFeatures"));
const IconTextBlock = dynamic(() => import("./IconTextBlock"));
const IconText = dynamic(() => import("./IconText"));
const TimeLine = dynamic(() => import("./TimeLine"));
const BoxShadow = dynamic(() => import("./BoxShadow"));
const ImageAndText = dynamic(() => import("./ImageAndText"));
const Button = dynamic(() => import("./Button"));
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));
const WhiteList = dynamic(() => import("./Whitelist"));
const LinkButton = dynamic(() => import("./LinkButton"));
const PartnersGrid = dynamic(() => import("./PartnersGrid"));
const Slider = dynamic(() => import("./Slider"));
const LinkBlock = dynamic(() => import("./LinkBlock"));
const TiltCard = dynamic(() => import("./TiltCard"));

export type ElementType<T> = {
  [key: string]: ComponentType<T>;
};

export const elements: ElementType<TBlockElement> = {
  page: Page,
  hero: Hero,
  richText: RichText,
  line: Line,
  button: Button,
  section: Section,
  imageBlock: ImageBlock,
  innerSection: InnerSection,
  dropdown: DropDown,
  topFeature: TopFeat,
  topFeatures: TopFeatures,
  faq: Faq,
  iconTextBlock: IconTextBlock,
  iconText: IconText,
  timeLine: TimeLine,
  boxShadow: BoxShadow,
  imageAndText: ImageAndText,
  header: Header,
  footer: Footer,
  whitelist: WhiteList,
  linkButton: LinkButton,
  partnersGrid: PartnersGrid,
  slider: Slider,
  tiltCard: TiltCard,
  linkBlock: LinkBlock,
  scrollContainer: ScrollContainer,
};

export type TBlockElement = any;
