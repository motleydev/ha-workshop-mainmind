import React from "react";
import ColorChip from "./ColorChip";
import Login from "./Login";
import { STATII, useStore } from "../store/store";

import { useMakeGuessMutation } from "../generated/graphql";

type Props = {
  code_complexity?: number;
  code_length?: number;
};

const pgArr = (arr: any[]): string => {
  return `{${arr.toString()}}`;
};

export default function Code({ code_complexity = 3, code_length = 5 }: Props) {
  const { userGame, gameStatus } = useStore((state) => state);

  const [status, setStatus] = React.useState<STATII>(STATII.PLAYING);

  React.useEffect(() => {
    if (gameStatus !== status) {
      setStatus(gameStatus!);
    }
  }, [gameStatus, status]);

  const [guess, setGuess] = React.useState(Array.from(Array(code_length)));

  const [result, makeGuess] = useMakeGuessMutation();

  const codeBoxes = [];

  const handleClick = (position: number, value: number | null) => {
    setGuess((state) => {
      let newArr = [...state];
      newArr[position] = value;
      return newArr;
    });
  };

  const handleGuess = () => {
    makeGuess({
      input_code: pgArr(guess),
      user_game_id: userGame?.id,
    });
  };

  for (let i = 0; i < code_length; i++) {
    codeBoxes.push({ index: i });
  }

  return (
    <>
      <div className=" flex w-full aspect-9/2 p-6 rounded-xl mb-6 relative border-purple-600 border padding-2 ">
        <Login />
        {guess.map((codeSlot, codeIndex) => {
          return (
            <div key={codeIndex} className="flex-1 flex flex-col p-2">
              <ColorChip
                codeSlot={codeSlot}
                codeIndex={codeIndex}
                codeComplexity={code_complexity}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </div>
      {status === STATII.WON && <p>You won :)</p>}
      {status === STATII.LOST && <p>You lost :(</p>}
      {!guess.includes(null) &&
        !guess.includes(undefined) &&
        status === STATII.PLAYING && (
          <button
            onClick={() => handleGuess()}
            className="absolute h-20 w-40 shadow-lg p-4 bg-purple-600 hover:bg-purple-800 text-white font-bold rounded-2xl z-10"
          >
            Guess
          </button>
        )}
    </>
  );
}
