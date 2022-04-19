alter table "public"."user_game" drop constraint "user_game_user_hash_fkey",
  add constraint "user_game_user_hash_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete cascade;
