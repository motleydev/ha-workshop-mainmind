import {
  subscriptionExchange,
  defaultExchanges,
  ExchangeInput,
} from "@urql/core";
import { withUrqlClient } from "next-urql";
import { createClient as createWSClient } from "graphql-ws";
import { ExchangeIO, createClient } from "urql";
import { useStore } from "../store/store";

const isServerSide = typeof window === "undefined";

const wsClient = () =>
  createWSClient({
    url: process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVER_URL as string,
    connectionParams: async () => {
      const token = useStore.getState().token;
      return !isServerSide && token
        ? {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        : {};
    },
  });

const noopExchange = ({ forward }: ExchangeInput): ExchangeIO => {
  return (operations$) => {
    const operationResult$ = forward(operations$);
    return operationResult$;
  };
};

const subscribeOrNoopExchange = () =>
  isServerSide
    ? noopExchange
    : subscriptionExchange({
        forwardSubscription: (operation) => {
          return {
            subscribe: (sink) => ({
              unsubscribe: wsClient().subscribe(operation, sink),
            }),
          };
        },
      });

const clientConfig = {
  url: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL as string,
  fetchOptions: () => {
    const token = useStore.getState().token;
    return !isServerSide && token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {};
  },
  exchanges: [...defaultExchanges, subscribeOrNoopExchange()],
};

export const client = createClient(clientConfig);

export default withUrqlClient((ssrExchange) => {
  const exchanges = [...clientConfig.exchanges, ssrExchange];
  return { ...client, exchanges };
});
