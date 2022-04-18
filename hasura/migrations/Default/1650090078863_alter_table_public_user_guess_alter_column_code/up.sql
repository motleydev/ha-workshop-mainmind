ALTER TABLE "public"."user_guess" ALTER COLUMN "code" TYPE numeric[];
alter table "public"."user_guess" rename column "code" to "input_code";
