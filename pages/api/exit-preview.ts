import { NextApiRequest, NextApiResponse } from 'next';

export default async function exit(req: NextApiRequest, res: NextApiResponse){
  const { slug = '' } = req.query
  res.clearPreviewData()
  res.status(307).redirect(`/${slug}`)
  res.end()
}