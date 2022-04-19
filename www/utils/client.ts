import {
  subscriptionExchange,
  defaultExchanges,
  ExchangeInput,
} from "@urql/core";
import { withUrqlClient } from "next-urql";
import { createClient as createWSClient } from "graphql-ws";
import { ExchangeIO } from "urql";

const isServerSide = typeof window === "undefined";

const wsClient = () =>
  createWSClient({
    url: process.env.NEXT_PUBLIC_SUBSCRIPTION_SERVER_URL as string,
    connectionParams: async () => {
      return !isServerSide && window.localStorage.getItem("auth")
        ? {
            headers: {
              authorization: `Bearer ${window.localStorage.getItem("auth")}`,
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
          console.log("trying");
          return {
            subscribe: (sink) => ({
              unsubscribe: wsClient().subscribe(operation, sink),
            }),
          };
        },
      });
export default withUrqlClient((ssrExchange) => ({
  url: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL as string,
  fetchOptions: () => {
    return !isServerSide && window.localStorage.getItem("auth")
      ? {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("auth")}`,
          },
        }
      : {};
  },
  exchanges: [...defaultExchanges, ssrExchange, subscribeOrNoopExchange()],
}));
