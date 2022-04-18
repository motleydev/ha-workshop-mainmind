alter table "public"."user_guess" rename column "input_code" to "code";
ALTER TABLE "public"."user_guess" ALTER COLUMN "code" TYPE ARRAY;
