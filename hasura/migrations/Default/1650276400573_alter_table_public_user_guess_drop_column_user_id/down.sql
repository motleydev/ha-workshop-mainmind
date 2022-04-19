alter table "public"."user_guess" alter column "user_id" drop not null;
alter table "public"."user_guess" add column "user_id" uuid;
