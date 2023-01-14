import { NextApiRequest, NextApiResponse } from "next"

import { initializeApollo } from "../../graphql/client/apollo-client"
import { ContentNodeDocument, ContentNodeQuery, ContentNodeQueryVariables } from "../../graphql/generated/graphql"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const isPreviewActive = process.env.NODE_ENV !== 'production' || Boolean(req?.query?.isPreviewActive)
  const apolloClient = initializeApollo(isPreviewActive)
    const marketData = await apolloClient.query<
    ContentNodeQuery,
    ContentNodeQueryVariables
  >({
    query: ContentNodeDocument,
    variables: {
      id: `/${req.query?.locale}/market-data`
    }
  })
    if ( marketData ) {
      return res.status(200).send({ data: marketData })
    } else {
      return res.status(403).json({ success: false })
    }
  }
  