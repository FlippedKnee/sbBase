export interface StoryblokComponent<T extends string> {
    _uid: string
    component: T
    _editable?: string
  }
  
  export interface StoryblokBridgeConfig {
    initOnlyOnce?: boolean
    accessToken?: string
  }
  
  export  interface StoryData<
    Content = StoryblokComponent<string> & { [index: string]: any }
  > {
    content: Content
    created_at: string
    full_slug: string
    group_id: string
    id: number
    is_startpage: boolean
    meta_data: any
    name: string
    parent_id: number
    position: number
    published_at: string | null
    first_published_at: string | null
    slug: string
    lang: string
    translated_slugs?: {
      path: string
      name: string | null
      lang: StoryData['lang']
    }[]
    /** only present with translated_slugs */
    default_full_slug?: string
    sort_by_date: string | null
    tag_list: string[]
    uuid: string
  }
  export interface StoryblokEventPayload<S extends StoryblokComponent<string> = any> {
    action:
      | 'customEvent'
      | 'published'
      | 'input'
      | 'change'
      | 'unpublished'
      | 'enterEditmode'
    event?: string
    story?: StoryData<S>
    slug?: string
    slugChanged?: boolean
    storyId?: number
    reload?: boolean
  }
  export interface StoryblokBridge {
    init: (config?: StoryblokBridgeConfig) => void
    pingEditor: (callback: (instance: StoryblokBridge) => void) => void
    isInEditor: () => boolean
    enterEditmode: () => void
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
    addComments: (
      tree: StoryblokComponent<string>,
      storyId: string
    ) => StoryblokComponent<string>
    resolveRelations: (
      story: any,
      resolve: string[],
      callback: (storyContent: any) => void
    ) => void
  }

  export type Maybe<T> = T | null;
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BlockScalar: any;
    ISO8601DateTime: any;
    JsonScalar: any;
  };
export type Alternate = {
    __typename?: 'Alternate';
    fullSlug: Scalars['String'];
    id: Scalars['Int'];
    isFolder?: Maybe<Scalars['Boolean']>;
    name: Scalars['String'];
    parentId?: Maybe<Scalars['Int']>;
    published: Scalars['Boolean'];
    slug: Scalars['String'];
  };
  
export  type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']>;
  content_string?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};
export type TranslatedSlug = {
    __typename?: 'TranslatedSlug';
    lang: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
  };