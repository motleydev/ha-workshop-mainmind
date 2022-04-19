import { action, thunk } from "easy-peasy";
import type { Action, Thunk, Computed } from "easy-peasy";

import type * as Schema from "../../generated/graphql";
import { useSignupMutation } from "../../generated/graphql";

/**
 * =====================
 *  STORE TYPES
 * =====================
 */

type Maybe<T> = T | null;

export interface Store {
  // STATE
  user: Maybe<Partial<Schema.User>>;
  currentGame: Maybe<Partial<Schema.User_Game>>;
  token: Schema.SignupOutput | undefined | null;

  // ACTIONS
  setUser: Action<Store, Partial<Schema.User>>;
  setToken: Action<Store, Schema.SignupOutput | undefined | null>;
  setUserGame: Action<Store, Partial<Schema.User_Game>>;

  // THUNKS
  signup: Thunk<Store, Schema.SignupMutationVariables>;
  createGame: Thunk<Store, Schema.CreateGameMutationVariables>;
  logout: Thunk<Store>;
}

/**
 * =====================
 *  STORE MODEL
 * =====================
 */

const model: Store = {
  // STATE
  user: null,
  currentGame: null,
  token: null,

  // ACTIONS
  setUser: action((store, payload) => {
    store.user = payload;
  }),
  setToken: action((store, payload) => {
    store.token = payload;
  }),
  setUserGame: action((store, payload) => {
    store.currentGame = payload;
  }),

  // THUNKS
  signup: thunk(async (store, payload) => {
    const [{ data, error }, mutation] = useSignupMutation();
    await mutation();

    if (error) throw new Error(JSON.stringify(error));
    store.setToken(data?.signup);
  }),

  createGame: thunk(async (store) => {
    // Users are restricted to only being able to view their own profile
    // This should only return a single record for an already authed user
    // store.setUserGame(null);
  }),

  logout: thunk(async (store) => {
    store.setToken(null);
  }),
};

export default model;
