// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  GetOriginalGameCode,
  YouWon,
  YouLost,
  UpdateGuess,
  UpdateGuessMutation,
  UpdateGuessMutationVariables,
  YouLostMutation,
  YouLostMutationVariables,
  YouWonMutation,
  YouWonMutationVariables,
  GetOriginalGameCodeQuery,
  GetOriginalGameCodeQueryVariables,
} from "../../../generated/graphql";

import { createClient } from "@urql/core";
import codeCheck from "../_helpers/codeCheck";

const client = createClient({
  url: "http://localhost:8080/v1/graphql",
  fetchOptions: () => {
    return {
      headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    };
  },
});

type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { input_code, user_game_id, id } = req.body.event.data.new;

  // Get original game

  try {
    const { data } = await client
      .query<GetOriginalGameCodeQuery, GetOriginalGameCodeQueryVariables>(
        GetOriginalGameCode,
        { id: user_game_id }
      )
      .toPromise();

    const { user_game_by_pk } = data!;
    const { game, guesses_aggregate } = user_game_by_pk!;
    const { aggregate } = guesses_aggregate;
    const { count } = aggregate!;
    const { code, code_complexity } = game;

    let result = codeCheck(code, input_code);

    const pgArr = (arr: any[]): string => {
      return `{${arr.toString()}}`;
    };
    const result_code = pgArr(result);

    if (code === input_code) {
      try {
        const winResult = await client
          .mutation<YouWonMutation, YouWonMutationVariables>(YouWon, {
            game_id: user_game_id,
            guess_id: id,
            result_code,
          })
          .toPromise();

        console.log("Win", winResult.data);
      } catch (e: any) {
        console.log(e);
      }
    } else if (count === code_complexity - 1) {
      try {
        const lostResult = await client
          .mutation<YouLostMutation, YouLostMutationVariables>(YouLost, {
            game_id: user_game_id,
            guess_id: id,
            result_code,
          })
          .toPromise();
        console.log("Lost", lostResult.data);
      } catch (e: any) {
        console.log(e);
      }
    } else {
      try {
        const updateResult = await client
          .mutation<UpdateGuessMutation, UpdateGuessMutationVariables>(
            UpdateGuess,
            {
              guess_id: id,
              result_code,
            }
          )
          .toPromise();
        console.log("Update", updateResult);
      } catch (e: any) {
        console.log(e);
      }
    }
  } catch (e: any) {
    console.log("Unable to fetch game");
    res.status(500).json({ message: "Unable to fetch game" });
  }

  res.status(200).json({ message: "ok" });
}
