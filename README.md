# An opinionated stack with Hasura and React

## What this project is

**This is not:**

- a beginner guide
- …even a best practice guide

**This is:**

- A usable pattern

---

## Architecture

### App

```mermaid
graph
    subgraph API
        HASURA[Hasura]
        HASURA --> ACTION
        HASURA --> EVENT
    end
    subgraph SERVERLESS
        ACTION[Signup Action]
        EVENT[Game Logic Event]
        ACTION --> NEXT_FUNCTION
        EVENT --> NEXT_FUNCTION
        NEXT_FUNCTION
    end
    subgraph WWW
        LOCAL_STATE
        SERVER_STATE
        LOCAL_STATE --> SERVER_STATE
        SERVER_STATE --> HASURA
        CREATE_GAME --> LOCAL_STATE
        SUBSCRIBE_TO_GAMEPLAY --> HASURA
        SIGNUP --> LOCAL_STATE
        SIGNUP
        MAKE_MOVE --> HASURA
    end
```

### CI/CD

```mermaid
graph
    subgraph CLOUD
        HASURA_CLOUD
        VERCEL
    end
    subgraph REPO
        GITHUB
        GITHUB --> HASURA_CLOUD
        GITHUB --> VERCEL
    end

    subgraph LOCAL
        HASURA --> GITHUB
        WWW ---> GITHUB
    end
```

### Hasura CLI

```mermaid
graph
    DOCKER_HASURA
    CLI_HASURA_CONSOLE
    METADATA_FOLDER
    CHANGE_EVENT
    CHANGE_EVENT --> CLI_HASURA_CONSOLE
    CLI_HASURA_CONSOLE -.- DOCKER_HASURA -.- METADATA_FOLDER
```

---

## React parts

- [NextJS](./guide/nextjs.md)

## Front-end parts

- [tailwind](./guide/tailwind.md)
- [urql](./guide/urql.md)
- [zustand](./guide/zustand.md)
- [graphql-codegen](./guide/graphql-codegen.md)

## GraphQL API

- [Hasura](./guide/hasura.md)
- [NextJS](./guide/nextjs.md)

## Postgres

[Schema Reference](./complete/hasura/migrations/Default/1650632011592_init/up.sql)

## Guide

[Start Here](./guide/start.md)
