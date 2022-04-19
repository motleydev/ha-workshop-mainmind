// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "request-ip";
import { fingerprint32 } from "farmhash";

import {
  CreateUser,
  CreateUserMutation,
  CreateUserMutationVariables,
} from "../../../generated/graphql";

import { generateJWT } from "../_helpers/auth";
import client from "../_helpers/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ip = getClientIp(req)?.toString() || "";
  const userAgent = req.headers["user-agent"]?.toString() || "";
  const date = new Date().getTime().toString() || "";

  const hash = fingerprint32(ip + userAgent + date).toString();

  try {
    const userResult = await client
      .mutation<CreateUserMutation, CreateUserMutationVariables>(CreateUser, {
        hash,
      })
      .toPromise();

    if (userResult.data) {
      const token = generateJWT({
        otherClaims: {
          "X-Hasura-User-Id": hash,
        },
      });

      return res.status(200).json({
        token,
      });
    } else {
      console.log(userResult.error);
      return res.status(400).json({ mesage: "oops" });
    }
  } catch (e) {
    console.log(e);
  }
}
