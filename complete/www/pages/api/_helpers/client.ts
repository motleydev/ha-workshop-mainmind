import { createClient } from "@urql/core";

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL as string,
  requestPolicy: "network-only",
  fetchOptions: () => {
    return {
      headers: {
        "x-hasura-admin-secret": process.env
          .HASURA_GRAPHQL_ADMIN_SECRET as string,
      },
    };
  },
});

export default client;
