export {};
interface StoryblokBridge {
  new (): StoryblokBridge;
  on: (
    event:
      | 'customEvent'
      | 'published'
      | 'input'
      | 'change'
      | 'unpublished'
      | 'enterEditmode'
      | string[],
    callback: (payload?: StoryblokEventPayload) => void
  ) => void
}
declare let StoryblokBridge: {
  new (): StoryblokBridge;
}

declare global {
  interface Window {
    StoryblokBridge: StoryblokBridge;
  }
}