alter table "public"."user" alter column "id" set default gen_random_uuid();
alter table "public"."user" alter column "id" drop not null;
alter table "public"."user" add column "id" uuid;
