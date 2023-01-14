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
  fontSize?: number;
  fontWeight?: string;
  linebreakHeight?: number;
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
  linebreakHeight,
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
