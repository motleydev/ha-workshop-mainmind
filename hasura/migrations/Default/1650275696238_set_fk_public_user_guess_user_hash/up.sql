alter table "public"."user_guess"
  add constraint "user_guess_user_hash_fkey"
  foreign key ("user_hash")
  references "public"."user"
  ("hash") on update restrict on delete cascade;
