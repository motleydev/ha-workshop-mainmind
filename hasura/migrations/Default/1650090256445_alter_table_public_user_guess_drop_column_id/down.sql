alter table "public"."user_guess" alter column "id" set default nextval('user_guess_id_seq'::regclass);
alter table "public"."user_guess" alter column "id" drop not null;
alter table "public"."user_guess" add column "id" int4;
