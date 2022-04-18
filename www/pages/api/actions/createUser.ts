// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "request-ip";
import { fingerprint32 } from "farmhash";

import { createClient } from "@urql/core";
import { generateJWT } from "../_helpers/auth";

type Data = {
  message?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ip = getClientIp(req)?.toString() || "";
  const userAgent = req.headers["user-agent"]?.toString() || "";
  const date = new Date().getTime().toString() || "";

  const hash = fingerprint32(ip + userAgent + date).toString();

  const token = generateJWT({
    otherClaims: {
      "X-Hasura-User-Id": hash,
    },
  });

  return res.json({
    token,
    name: user.name,
    email: user.email,
    refreshToken: user.refresh_token,
  });
}
