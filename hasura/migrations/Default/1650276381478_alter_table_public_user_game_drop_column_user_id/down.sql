alter table "public"."user_game" alter column "user_id" drop not null;
alter table "public"."user_game" add column "user_id" uuid;
