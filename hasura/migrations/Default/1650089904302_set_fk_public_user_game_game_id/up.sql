alter table "public"."user_game"
  add constraint "user_game_game_id_fkey"
  foreign key ("game_id")
  references "public"."game"
  ("id") on update restrict on delete cascade;
