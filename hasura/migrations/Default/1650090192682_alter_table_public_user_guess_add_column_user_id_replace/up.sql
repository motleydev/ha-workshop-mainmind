CREATE EXTENSION IF NOT EXISTS pgcrypto;
alter table "public"."user_guess" add column "user_id_replace" uuid
 not null unique default gen_random_uuid();
