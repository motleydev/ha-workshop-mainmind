import React from "react";
import {
  GameDetailsSubscription,
  useGameDetailsSubscription,
  User_Game,
} from "../generated/graphql";
import { STATII, useStore } from "../store/store";

type Props = {};

export default function GameScore({}: Props) {
  const [status, setStatus] = React.useState<STATII>(STATII.PLAYING);

  const userGame = useStore((state) => state.userGame);
  const [gameStatus, setGameStatus] = useStore((state) => [
    state.gameStatus,
    state.setGameStatus,
  ]);

  React.useEffect(() => {
    if (status !== gameStatus) {
      setGameStatus(status);
    }
  }, [status, setGameStatus, gameStatus]);

  const handleSubscription = (
    total = {},
    response: GameDetailsSubscription
  ) => {
    console.log(total);
    if (response.user_game_by_pk?.lost_at) {
      setStatus(STATII.LOST);
    }

    if (response.user_game_by_pk?.completed_at) {
      setStatus(STATII.WON);
    }

    return { ...total, ...response };
  };

  const [{ data, error }] = useGameDetailsSubscription(
    {
      variables: {
        id: userGame?.id,
      },
    },
    handleSubscription
  );

  return (
    <div>
      {data?.user_game_by_pk?.user_guesses.map((guess, index) => {
        return (
          <div
            key={index}
            className="flex gap-2 border border-purple-300 p-2 mb-4 rounded-lg"
          >
            {guess.result_code ? (
              guess.result_code.map((code: string, index: number) => {
                const styles: Record<string, string> = {
                  0: "bg-white",
                  1: "bg-purple-400",
                  2: "bg-purple-100",
                };
                return (
                  <div
                    key={index}
                    className={`${styles[code]} w-8 h-8 border rounded-lg`}
                  ></div>
                );
              })
            ) : (
              <p>…</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
