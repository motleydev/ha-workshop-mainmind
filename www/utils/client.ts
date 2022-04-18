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
  });

const noopExchange = ({ forward }: ExchangeInput): ExchangeIO => {
  return (operations$) => {
    const operationResult$ = forward(operations$);
    return operationResult$;
  };
};

const subscribeOrNoopExchange = isServerSide
  ? noopExchange
  : subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient().subscribe(operation, sink),
        }),
      }),
    });

export default withUrqlClient((ssrExchange) => ({
  url: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL as string,
  exchanges: [...defaultExchanges, ssrExchange, subscribeOrNoopExchange],
}));
