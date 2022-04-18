alter table "public"."user_guess" drop constraint "user_guess_pkey";
alter table "public"."user_guess"
    add constraint "user_guess_pkey"
    primary key ("id");
