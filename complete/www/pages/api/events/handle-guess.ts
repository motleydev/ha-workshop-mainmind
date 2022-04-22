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

import client from "../_helpers/client";
import codeCheck from "../_helpers/codeCheck";

type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //* INFO Parse event from inserted guess
  const { input_code, user_game_id, id: guess_id } = req.body.event.data.new;

  //* INFO Get related game, user, and guess
  try {
    const { data } = await client
      .query<GetOriginalGameCodeQuery, GetOriginalGameCodeQueryVariables>(
        GetOriginalGameCode,
        { id: user_game_id }
      )
      .toPromise();

    const { user_game_by_pk } = data!;
    const { game, user_guesses_aggregate, user_hash } = user_game_by_pk!;
    const { aggregate } = user_guesses_aggregate;
    const { count } = aggregate!;
    const { id: game_id, code, code_complexity } = game;
    console.log("total guesses ", count);

    let result = codeCheck(code, input_code);

    const pgArr = (arr: any[]): string => {
      return `{${arr.toString()}}`;
    };
    const result_code = pgArr(result);

    //* INFO Handle Win via upsert
    if (code === input_code) {
      try {
        const winResult = await client
          .mutation<YouWonMutation, YouWonMutationVariables>(YouWon, {
            user_game_id,
            user_hash,
            game_id,
            guess_id,
            result_code,
            input_code: pgArr(input_code),
          })
          .toPromise();
        console.log("Win", winResult.error || winResult.data);
      } catch (e: any) {
        // Handle Server Error
      }
      //* INFO Handle Loss via upsert
    } else if (count + 1 > code_complexity) {
      try {
        const lostResult = await client
          .mutation<YouLostMutation, YouLostMutationVariables>(YouLost, {
            user_game_id,
            user_hash,
            game_id,
            guess_id,
            result_code,
            input_code: pgArr(input_code),
          })
          .toPromise();
        console.log("Lost", lostResult.error || lostResult.data);
      } catch (e: any) {
        // Handle Server Error
      }
    } else {
      //* INFO Insert Guess via upsert
      try {
        const updateResult = await client
          .mutation<UpdateGuessMutation, UpdateGuessMutationVariables>(
            UpdateGuess,
            {
              guess_id,
              result_code,
            }
          )
          .toPromise();
        console.log("Updated", updateResult.error || updateResult.data);
      } catch (e: any) {
        // Handle Server Error
      }
    }
  } catch (e: any) {
    res.status(500).json({ message: "Unable to fetch game" });
  }

  res.status(200).json({ message: "ok" });
}
