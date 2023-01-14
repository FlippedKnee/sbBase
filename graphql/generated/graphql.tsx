import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
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

export type ContentItem = {
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

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: Maybe<Scalars['ISO8601DateTime']>;
  /** Greater than float value */
  gt_float?: Maybe<Scalars['Float']>;
  /** Greater than integer value */
  gt_int?: Maybe<Scalars['Int']>;
  /** Matches exactly one value */
  in?: Maybe<Scalars['String']>;
  /** Matches any value of given array */
  in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Matches exactly one integer value */
  in_int?: Maybe<Scalars['Int']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: Maybe<Scalars['String']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: Maybe<Scalars['ISO8601DateTime']>;
  /** Less than float value */
  lt_float?: Maybe<Scalars['Float']>;
  /** Less than integer value */
  lt_int?: Maybe<Scalars['Int']>;
  /** Matches all without the given value */
  not_in?: Maybe<Scalars['String']>;
  /** Matches all without the given value */
  not_like?: Maybe<Scalars['String']>;
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']>;
  isFolder?: Maybe<Scalars['Boolean']>;
  isStartpage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Asset>;
  body?: Maybe<Scalars['BlockScalar']>;
  component?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['BlockScalar']>;
  header?: Maybe<Scalars['BlockScalar']>;
  hero?: Maybe<Scalars['BlockScalar']>;
  maxWidth?: Maybe<Scalars['String']>;
};

export type PageFilterQuery = {
  background?: Maybe<FilterQueryOperations>;
  maxWidth?: Maybe<FilterQueryOperations>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
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

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  Links?: Maybe<LinkEntries>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  RateLimit?: Maybe<RateLimit>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};


export type QueryTypeContentNodeArgs = {
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
};


export type QueryTypeLinksArgs = {
  paginated?: Maybe<Scalars['Boolean']>;
  starts_with?: Maybe<Scalars['String']>;
};


export type QueryTypePageItemArgs = {
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};


export type QueryTypePageItemsArgs = {
  by_slugs?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<PageFilterQuery>;
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
};


export type QueryTypeTagsArgs = {
  starts_with?: Maybe<Scalars['String']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int'];
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type ContentNodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContentNodeQuery = { __typename?: 'QueryType', ContentNode?: { __typename?: 'ContentItem', content?: any | null | undefined, full_slug?: string | null | undefined, id?: number | null | undefined, name?: string | null | undefined, parent_id?: number | null | undefined, uuid?: string | null | undefined, alternates?: Array<{ __typename?: 'Alternate', fullSlug: string } | null | undefined> | null | undefined } | null | undefined };

export type PathsQueryVariables = Exact<{ [key: string]: never; }>;


export type PathsQuery = { __typename?: 'QueryType', Links?: { __typename?: 'LinkEntries', items: Array<{ __typename?: 'LinkEntry', slug?: string | null | undefined, name?: string | null | undefined, isFolder?: boolean | null | undefined, isStartpage?: boolean | null | undefined }> } | null | undefined };


export const ContentNodeDocument = gql`
    query ContentNode($id: ID!) {
  ContentNode(id: $id) {
    alternates {
      fullSlug
    }
    content
    full_slug
    id
    name
    parent_id
    uuid
  }
}
    `;

/**
 * __useContentNodeQuery__
 *
 * To run a query within a React component, call `useContentNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContentNodeQuery(baseOptions: Apollo.QueryHookOptions<ContentNodeQuery, ContentNodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContentNodeQuery, ContentNodeQueryVariables>(ContentNodeDocument, options);
      }
export function useContentNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentNodeQuery, ContentNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContentNodeQuery, ContentNodeQueryVariables>(ContentNodeDocument, options);
        }
export type ContentNodeQueryHookResult = ReturnType<typeof useContentNodeQuery>;
export type ContentNodeLazyQueryHookResult = ReturnType<typeof useContentNodeLazyQuery>;
export type ContentNodeQueryResult = Apollo.QueryResult<ContentNodeQuery, ContentNodeQueryVariables>;
export const PathsDocument = gql`
    query Paths {
  Links {
    items {
      slug
      name
      isFolder
      isStartpage
    }
  }
}
    `;

/**
 * __usePathsQuery__
 *
 * To run a query within a React component, call `usePathsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePathsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePathsQuery(baseOptions?: Apollo.QueryHookOptions<PathsQuery, PathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PathsQuery, PathsQueryVariables>(PathsDocument, options);
      }
export function usePathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PathsQuery, PathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PathsQuery, PathsQueryVariables>(PathsDocument, options);
        }
export type PathsQueryHookResult = ReturnType<typeof usePathsQuery>;
export type PathsLazyQueryHookResult = ReturnType<typeof usePathsLazyQuery>;
export type PathsQueryResult = Apollo.QueryResult<PathsQuery, PathsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    