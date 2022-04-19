alter table "public"."user" add constraint "user_username_key" unique (username);
alter table "public"."user" alter column "username" drop not null;
alter table "public"."user" add column "username" text;
