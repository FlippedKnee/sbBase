import React, { useState, useEffect } from "react";
import Script from "next/script";
import { GetStaticProps } from "next";

import { elements } from "../blocks";
import { initializeApollo } from "../graphql/client/apollo-client";
import {
  ContentItem,
  ContentNodeDocument,
  ContentNodeQuery,
  ContentNodeQueryVariables,
  // MarketdataComponent,
  PathsDocument,
  PathsQuery,
  PathsQueryVariables,
} from "../graphql/generated/graphql";
import { usePreview } from "../hooks/usePreview";
import { useDynamicComponent } from "../components/DynamicComponent";

type Paths = {
  params: {
    slug: string[];
    locale: string;
  };
};

type TSlug = {
  story: ContentItem;
  isWorkingInStoryblok: boolean;
  // marketData: MarketdataComponent;
  isPreviewActive: boolean;
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const paths: Paths[] = [];

  const links = await apolloClient.query<PathsQuery, PathsQueryVariables>({
    query: PathsDocument,
  });
  links.data.Links?.items.forEach((link) => {
    if (link.isFolder) {
      return;
    }
    const { slug } = link;
    const splitSlug = slug?.split("/").filter(Boolean);

    if (splitSlug && splitSlug[1] === "market-data") {
      return;
    }
    if (splitSlug && splitSlug.length > 1) {
      paths.push({
        params: {
          slug: splitSlug?.slice(1, splitSlug.length),
          locale: splitSlug[0],
        },
      });
    }
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({
  locale,
  params,
  preview = false,
}) => {
  const isPreviewActive = process.env.NODE_ENV !== "production" || preview;
  const slug = params?.slug as string[];
  const apolloClient = initializeApollo(isPreviewActive);
  const storyData = await apolloClient.query<
    ContentNodeQuery,
    ContentNodeQueryVariables
  >({
    query: ContentNodeDocument,
    variables: {
      id: slug ? `/${locale}/${slug.join("/")}` : `${locale}`,
    },
  });

  const story = storyData?.data.ContentNode;
  if (!story) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  return {
    props: {
      story: storyData.data.ContentNode,
      isPreviewActive,
    },
    revalidate: 60,
  };
};

const Index = (props: TSlug) => {
  const { story, script } = usePreview<any>({
    story: props.story as ContentItem,
    isPreviewActive: props.isPreviewActive as boolean,
    // marketData: props.marketData,
    marketDataString: "marketData",
  });
  const content = useDynamicComponent(story?.content, elements);
  useEffect(() => {}, [props?.story?.full_slug]);
  return (
    <>
      {content}

      {script && (
        <Script
          src="//app.storyblok.com/f/storyblok-v2-latest.js"
          onLoad={script}
        />
      )}
    </>
  );
};

export default Index;
