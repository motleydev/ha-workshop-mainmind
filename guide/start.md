# Start Here

This project is an opinionated stack with sane defaults. The patterns in this project attempt to explain the possibility for complex behaviour without adding so much boilerplate that you can't modify or gut the project for your own needs.

The stack is composed of:

- **NextJS**

  - Handles our application routing
  - TypeScript tooling
  - Serverless functions

- **Tailwind**

  - It's just CSS
  - Is easy to remove/expand on as needed

- **Zustand**

  - Handles state management
  - Handles persistence (localstorage)
  - Handles reactive state changes

- \*\*

## Step 0

**This workshop will use:**

- [Docker + Docker-Compose](https://docs.docker.com/compose/install/)
- [Heroku](https://signup.heroku.com/) or other Postgres DB provider
- [Vercel](https://vercel.com/signup) for Hosting (CI/CD)
- [Github](https://github.com/join) for Deploying
- [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/) For managing metadata

## Step One (Front-end)

### 1. New working Directory

```bash
mkdir new-project && cd new-project
```

### 2. Install NextJS with Typescript

```bash
yarn create www --typescript
```

### 3. Add Tailwind

```bash
yarn add -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

Replace `tailwind.config.js` with:

```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Replace `global.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Add Zustand

```bash
yarn add zustand
```

```bash
mkdir store && touch ./store/store.ts
```

### 5. Add Urql

```bash
yarn add urql next-urql react-is
```

```bash
mkdir utils && touch ./utils/client.ts
```

## Step Two (Hasura)

From the root directory

```bash
/www
```

### 1. Modify `docker-compose.yml`

First, get the compose file

```bash
curl https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml -o docker-compose.yml
```

Current Dir

```
/www
docker-compose.yml
```

Service `postgres` should look like:

```yaml
postgres:
  image: postgres:12
  ports:
    - "5434:5432" # so we can access it from outside docker if we want
  restart: always
  volumes:
    - db_data:/var/lib/postgresql/data
  environment:
    POSTGRES_PASSWORD: postgrespassword
```

Service `graphql-engine.environment`

From line ~29

```yaml
# ...
## uncomment next line to set an admin secret
HASURA_GRAPHQL_ADMIN_SECRET: myadminsecretkey
HASURA_GRAPHQL_UNAUTHORIZED_ROLE: anonymous
HASURA_GRAPHQL_JWT_SECRET: '{ "type": "HS256", "key": "this-is-a-generic-HS256-secret-key-and-you-should-really-change-it" }'
NEXT_URL: "http://host.docker.internal:3000"
```

Pro-tip

```yaml
HASURA_GRAPHQL_ENABLE_CONSOLE: "false" # set to "false" to disable console
```

### 1. Init Hasura Metadata Folder

```bash
hasura init # yes to folder named hasura
```

Current Dir

```
/hasura
/www
docker-compose.yml
```

- Run Hasura console

```bash
# From /hasura
hasura console --admin-secret myadminsecretkey
```

### 2. Configure Hasura

Launch Hasura

```bash
docker-compose up -d
```

- Add database
- Add schema
- Track relations
- Explore API

### 3. Create business logic Event

- Add Event trigger
- Add event handler

### 4. Create login Action

```bash
yarn add farmhash request-ip
```

```bash
# from wwww
mkdir ./api/_helpers && touch ./api/_helpers/auth.ts && touch ./api/_helpers/client.ts && touch ./api/_helpers/codeCheck.ts
```

- Add action
- Add action handler

## Step Three (the connection)

- Connect API to NextJS

Make queries directory

```bash
# from www
mkdir generated && mkdir queries
```

Add codegen

```bash
yarn add -D graphql @graphql-codegen/cli
```

Follow the init process for URQL

```bash
yarn graphql-codegen init
```

Add all code-gen dependencies

```bash
yarn add -D @graphql-codegen/typescript-urql @graphql-codegen/urql-introspection @graphql-codegen/typescript-document-nodes
```

Update `codegen.yml`

```yaml
overwrite: true
schema:
  - http://localhost:8080/v1/graphql:
      headers:
        x-hasura-admin-secret: "myadminsecretkey"
documents: "queries/**/*.graphql"
generates:
  generated/graphql.ts:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-urql"
      - "typescript-document-nodes"
      - "urql-introspection"
    config:
      withHooks: true
  ./graphql.schema.json:
    plugins:
      - "introspection"
```

- Configure client
- Configure `_app.tsx`
- Test Query
- Fix permissions
- Generate SDK
- Configure `store.ts`

## Remaining

Draw the rest of the Owl
