import * as styles from "./Richtext.styles";
import React from "react";
import { render, StoryblokRichtext } from "storyblok-rich-text-react-renderer";

export type RichTextProps = {
  text?: StoryblokRichtext;
  textAlign?: string;
  textColor?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  maxWidth?: number;
  fontSize?: string;
  fontWeight?: string;
  linebreakHeight?: number;
  noWrap?: boolean;
  lineHeight?: string;
  textAlignMobile?: string;
};

const RichText = ({
  text,
  textAlign,
  textColor,
  fontSize,
  fontWeight,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  maxWidth,
  noWrap,
  linebreakHeight,
  lineHeight,
  textAlignMobile,
  ...props
}: RichTextProps) => {
  return (
    <styles.RichTextContainer
      maxWidth={maxWidth}
      textAlign={textAlign}
      textColor={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      noWrap={noWrap}
      lineHeight={lineHeight}
      textAlignMobile={textAlignMobile}
      {...props}
    >
      {render(text, {
        nodeResolvers: {
          hard_break: () => {
            // adds an empty span for linebreak use by shift + enter in richtext
            return (
              <styles.TextDivider
                linebreakHeight={linebreakHeight}
              ></styles.TextDivider>
            );
          },
        },
      })}
    </styles.RichTextContainer>
  );
};
export default RichText;
