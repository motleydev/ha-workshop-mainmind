import React from "react";
import { useStore } from "../store/store";

type Props = {};

export default function Login({}: Props) {
  const [authed, setAuthed] = React.useState(false);

  const setToken = useStore((state) => state.setToken);
  const token = useStore((state) => state.token);

  const handleLogin = async () => {
    setToken();
  };

  React.useEffect(() => {
    if (!authed && token) {
      setAuthed(true);
    }
  }, [authed, token]);

  return authed ? (
    <></>
  ) : (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <button
        onClick={() => handleLogin()}
        className="h-20 w-40 shadow-lg p-4 bg-purple-600 hover:bg-purple-800 text-white font-bold rounded-2xl relative z-10"
      >
        <p>Let&apos;s Play</p>
      </button>
      <div className="bg-white absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
    </div>
  );
}
