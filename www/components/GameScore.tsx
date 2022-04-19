import React from "react";
import { useSubscription } from "urql";
import {
  useGameDetailsSubscription,
  GameDetailsDocument,
  GameDetailsSubscription,
  GameDetailsSubscriptionVariables,
} from "../generated/graphql";

type Props = {};

export default function GameScore({}: Props) {
  const [{ data, error }] = useGameDetailsSubscription({
    variables: {
      id: "323c792c-f3f4-49e7-8428-86d803164cc8",
    },
  });

  return (
    <div>
      {data?.user_game_by_pk?.user_guesses.map((guess, index) => {
        return <p>{guess.result_code}</p>;
      })}
    </div>
  );
}
