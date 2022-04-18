alter table "public"."user_game"
  add constraint "user_game_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete cascade;
