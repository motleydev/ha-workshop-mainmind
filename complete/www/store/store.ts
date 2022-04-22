import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { client } from "../utils/client";

export enum STATII {
  PLAYING = "PLAYING",
  WON = "WON",
  LOST = "LOST",
}

import {
  User_Game,
  CreateGameDocument,
  CreateGameMutation,
  CreateGameMutationVariables,
  SignupDocument,
  SignupMutation,
  SignupMutationVariables,
  Game,
  GetLatestGameQuery,
  GetLatestGameDocument,
} from "../generated/graphql";

type Maybe<T> = T | null | undefined;
interface GameState {
  token: Maybe<string>;
  userGame: Maybe<Partial<User_Game>>;
  latestGame: Maybe<Partial<Game>>;
  gameStatus: Maybe<STATII>;
  setUserGame: (user_game: Maybe<Partial<User_Game>>) => void;
  setLatestGame: () => void;
  setToken: () => void;
  setGameStatus: (status: STATII) => void;
}

const useStore = create<GameState>()(
  devtools(
    persist(
      (set, get) => ({
        userGame: null,
        token: null,
        latestGame: null,
        gameStatus: STATII.PLAYING,
        setGameStatus: (status) => {
          set({ gameStatus: status });
        },
        setLatestGame: () => {
          client
            .query<GetLatestGameQuery>(GetLatestGameDocument)
            .toPromise()
            .then((d) => {
              set({ latestGame: d.data?.game[0] });
            });
        },
        setUserGame: (userGame) => set({ userGame }),
        setToken: () => {
          client
            .mutation<SignupMutation, SignupMutationVariables>(SignupDocument)
            .toPromise()
            .then((d) => {
              set({ token: d.data?.signup?.token });
              client
                .mutation<CreateGameMutation, CreateGameMutationVariables>(
                  CreateGameDocument,
                  {
                    game_id: get().latestGame?.id,
                  }
                )
                .toPromise()
                .then((d) => {
                  get().setUserGame(d.data?.insert_user_game_one);
                });
            })
            .catch((e) => console.log(e));
        },
      }),
      {
        name: "game-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export { useStore };
