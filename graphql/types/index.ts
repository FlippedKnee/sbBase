import { Maybe, Scalars } from "../generated/graphql";

//Temp type until we get a paid storyblok plan to include the Assetfolder
export type Asset = {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  focus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

//Temp type until we get a paid storyblok plan to include the Link
export type StoryblokLink = {
  cached_url?: string
  fieldtype?: string
  id?: string
  linktype?: string
  url?: string
  target?: "_blank"
}