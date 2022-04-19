alter table "public"."user_game" alter column "user_hash" set default '[x-hasura-user-id]'::text;
