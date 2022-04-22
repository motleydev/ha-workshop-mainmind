SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.game (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    code_length integer NOT NULL,
    code_complexity integer NOT NULL,
    code numeric[] NOT NULL,
    game_config jsonb
);
CREATE TABLE public."user" (
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    hash text NOT NULL
);
CREATE TABLE public.user_game (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    completed_at timestamp with time zone,
    game_id uuid NOT NULL,
    lost_at timestamp with time zone,
    user_hash text NOT NULL
);
CREATE TABLE public.user_guess (
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    input_code numeric[] NOT NULL,
    user_game_id uuid NOT NULL,
    result_code numeric[],
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_hash text DEFAULT '[x-hasura-user-id]'::text NOT NULL
);
ALTER TABLE ONLY public.game
    ADD CONSTRAINT game_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_game
    ADD CONSTRAINT user_game_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_guess
    ADD CONSTRAINT user_guess_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_guess
    ADD CONSTRAINT user_guess_user_id_replace_key UNIQUE (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_hash_key UNIQUE (hash);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (hash);
CREATE TRIGGER set_public_game_updated_at BEFORE UPDATE ON public.game FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_game_updated_at ON public.game IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_user_game_updated_at BEFORE UPDATE ON public.user_game FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_user_game_updated_at ON public.user_game IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_user_updated_at BEFORE UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_user_updated_at ON public."user" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.user_game
    ADD CONSTRAINT user_game_game_id_fkey FOREIGN KEY (game_id) REFERENCES public.game(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.user_game
    ADD CONSTRAINT user_game_user_hash_fkey FOREIGN KEY (user_hash) REFERENCES public."user"(hash) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.user_guess
    ADD CONSTRAINT user_guess_user_game_id_fkey FOREIGN KEY (user_game_id) REFERENCES public.user_game(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.user_guess
    ADD CONSTRAINT user_guess_user_hash_fkey FOREIGN KEY (user_hash) REFERENCES public."user"(hash) ON UPDATE RESTRICT ON DELETE CASCADE;
