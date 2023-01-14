import React, { useState, useEffect } from "react";
import { ContentItem } from "../graphql/generated/graphql";

import { StoryblokEventPayload } from "../types/storyblok";

interface IUsePreview<T> {
  story: ContentItem;
  script: (() => void) | undefined;
  marketdata?: T | null;
}

interface usePreviewProps<T> {
  story: ContentItem;
  isPreviewActive: boolean;
  marketData?: T | null;
  marketDataString?: string;
}

export function usePreview<T>({
  story,
  isPreviewActive,
  marketData,
  marketDataString = "marketData",
}: usePreviewProps<T>): IUsePreview<T> {
  const [previewStory, setPreviewStory] = useState<ContentItem | null>(story);
  const [newMarketData, setNewMarketData] = useState<T | null | undefined>(
    marketData
  );
  const initStoryblok = () => {
    const storyblokBridge = new window.StoryblokBridge();
    storyblokBridge.on(["published", "change"], () => {
      // reload page if save or publish is clicked

      window.location.reload();
    });
    storyblokBridge.on("input", (event: StoryblokEventPayload) => {
      const mergedStory = Object.assign({}, story, {
        content: event.story?.content,
      });
      if (event?.story?.content?.component === marketDataString) {
        setNewMarketData(event?.story?.content);
      }
      setPreviewStory(mergedStory);
    });
  };

  useEffect(() => {
    setPreviewStory(null);
  }, [story]);
  const script = isPreviewActive ? initStoryblok : undefined;

  return { story: previewStory ?? story, script, marketdata: newMarketData };
}
