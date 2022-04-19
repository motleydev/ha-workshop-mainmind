import React from "react";
import { useSignupMutation, useCreateGameMutation } from "../generated/graphql";

type Props = {};

export default function Login({}: Props) {
  const [authed, setAuthed] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [, executeMutation] = useSignupMutation();
  const [result, newGameMutation] = useCreateGameMutation();

  const handleLogin = async () => {
    const { data } = await executeMutation();
    const newGame = await newGameMutation({
      game_id: "aefdd9ae-260b-4633-9afb-eda3ecb91177",
    });
    setToken(data?.signup?.token as string);
    window.localStorage.setItem("auth", data?.signup?.token as string);
  };

  React.useEffect(() => {
    if (window.localStorage.getItem("auth")) {
      setAuthed(true);
    }
  }, [token]);

  return authed ? (
    <></>
  ) : (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <button
        onClick={() => handleLogin()}
        className="h-20 w-40 shadow-lg p-4 bg-purple-600 hover:bg-purple-800 text-white font-bold rounded-2xl relative z-10"
      >
        Let's Play
      </button>
      <div className="bg-white absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
    </div>
  );
}
