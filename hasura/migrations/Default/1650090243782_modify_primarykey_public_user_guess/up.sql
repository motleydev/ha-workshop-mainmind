BEGIN TRANSACTION;
ALTER TABLE "public"."user_guess" DROP CONSTRAINT "user_guess_pkey";

ALTER TABLE "public"."user_guess"
    ADD CONSTRAINT "user_guess_pkey" PRIMARY KEY ("id_replace");
COMMIT TRANSACTION;
