import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sb = req.query["_storyblok"];
  const sbSpaceId = req.query["_storyblok_tk[space_id]"];
  const sbTimestamp = req.query["_storyblok_tk[timestamp]"];
  const sbToken = req.query["_storyblok_tk[token]"];

  const validationString = `${sbSpaceId}:${process.env.STORYBLOK}:${sbTimestamp}`;
  const validationToken = crypto
    .createHash("sha1")
    .update(validationString)
    .digest("hex");

  if (
    sbToken !== validationToken ||
    Number(sbTimestamp) < Math.floor(Date.now() / 1000) - 3600
  ) {
    return res.status(401).json({ message: "Invalid token provided" });
  }
  const url = `/${req.query.slug}?_storyblok=${sb}&_storyblok_tk[space_id]=${sbSpaceId}&_storyblok_tk[timestamp]=${sbTimestamp}&_storyblok_tk[token]=${sbToken}`;

  res.setPreviewData({});
  res.writeHead(307, {
    Location: url,
  });
  res.end();
}