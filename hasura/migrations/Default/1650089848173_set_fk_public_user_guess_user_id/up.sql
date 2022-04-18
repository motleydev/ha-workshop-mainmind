alter table "public"."user_guess"
  add constraint "user_guess_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete cascade;
