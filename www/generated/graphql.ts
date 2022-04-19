import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _numeric: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type SignupOutput = {
  __typename?: 'SignupOutput';
  token: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_numeric". All fields are combined with logical 'AND'. */
export type _Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_numeric']>;
  _gt?: InputMaybe<Scalars['_numeric']>;
  _gte?: InputMaybe<Scalars['_numeric']>;
  _in?: InputMaybe<Array<Scalars['_numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_numeric']>;
  _lte?: InputMaybe<Scalars['_numeric']>;
  _neq?: InputMaybe<Scalars['_numeric']>;
  _nin?: InputMaybe<Array<Scalars['_numeric']>>;
};

/** columns and relationships of "game" */
export type Game = {
  __typename?: 'game';
  code: Scalars['_numeric'];
  code_complexity: Scalars['Int'];
  code_length: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  game_config?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<User_Game>;
  /** An aggregate relationship */
  users_aggregate: User_Game_Aggregate;
};


/** columns and relationships of "game" */
export type GameGame_ConfigArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "game" */
export type GameUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};

/** aggregated selection of "game" */
export type Game_Aggregate = {
  __typename?: 'game_aggregate';
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

/** aggregate fields of "game" */
export type Game_Aggregate_Fields = {
  __typename?: 'game_aggregate_fields';
  avg?: Maybe<Game_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
  stddev?: Maybe<Game_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Sum_Fields>;
  var_pop?: Maybe<Game_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Var_Samp_Fields>;
  variance?: Maybe<Game_Variance_Fields>;
};


/** aggregate fields of "game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Game_Append_Input = {
  game_config?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Game_Avg_Fields = {
  __typename?: 'game_avg_fields';
  code_complexity?: Maybe<Scalars['Float']>;
  code_length?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Bool_Exp>>;
  _not?: InputMaybe<Game_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Bool_Exp>>;
  code?: InputMaybe<_Numeric_Comparison_Exp>;
  code_complexity?: InputMaybe<Int_Comparison_Exp>;
  code_length?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  game_config?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<User_Game_Bool_Exp>;
};

/** unique or primary key constraints on table "game" */
export enum Game_Constraint {
  /** unique or primary key constraint */
  GamePkey = 'game_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Game_Delete_At_Path_Input = {
  game_config?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Game_Delete_Elem_Input = {
  game_config?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Game_Delete_Key_Input = {
  game_config?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "game" */
export type Game_Inc_Input = {
  code_complexity?: InputMaybe<Scalars['Int']>;
  code_length?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "game" */
export type Game_Insert_Input = {
  code?: InputMaybe<Scalars['_numeric']>;
  code_complexity?: InputMaybe<Scalars['Int']>;
  code_length?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  game_config?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  users?: InputMaybe<User_Game_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  __typename?: 'game_max_fields';
  code_complexity?: Maybe<Scalars['Int']>;
  code_length?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  __typename?: 'game_min_fields';
  code_complexity?: Maybe<Scalars['Int']>;
  code_length?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "game" */
export type Game_Mutation_Response = {
  __typename?: 'game_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Game>;
};

/** input type for inserting object relation for remote table "game" */
export type Game_Obj_Rel_Insert_Input = {
  data: Game_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Game_On_Conflict>;
};

/** on_conflict condition type for table "game" */
export type Game_On_Conflict = {
  constraint: Game_Constraint;
  update_columns?: Array<Game_Update_Column>;
  where?: InputMaybe<Game_Bool_Exp>;
};

/** Ordering options when selecting data from "game". */
export type Game_Order_By = {
  code?: InputMaybe<Order_By>;
  code_complexity?: InputMaybe<Order_By>;
  code_length?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  game_config?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<User_Game_Aggregate_Order_By>;
};

/** primary key columns input for table: game */
export type Game_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Game_Prepend_Input = {
  game_config?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "game" */
export enum Game_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CodeComplexity = 'code_complexity',
  /** column name */
  CodeLength = 'code_length',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameConfig = 'game_config',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "game" */
export type Game_Set_Input = {
  code?: InputMaybe<Scalars['_numeric']>;
  code_complexity?: InputMaybe<Scalars['Int']>;
  code_length?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  game_config?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Game_Stddev_Fields = {
  __typename?: 'game_stddev_fields';
  code_complexity?: Maybe<Scalars['Float']>;
  code_length?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Game_Stddev_Pop_Fields = {
  __typename?: 'game_stddev_pop_fields';
  code_complexity?: Maybe<Scalars['Float']>;
  code_length?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Game_Stddev_Samp_Fields = {
  __typename?: 'game_stddev_samp_fields';
  code_complexity?: Maybe<Scalars['Float']>;
  code_length?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Game_Sum_Fields = {
  __typename?: 'game_sum_fields';
  code_complexity?: Maybe<Scalars['Int']>;
  code_length?: Maybe<Scalars['Int']>;
};

/** update columns of table "game" */
export enum Game_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CodeComplexity = 'code_complexity',
  /** column name */
  CodeLength = 'code_length',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameConfig = 'game_config',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Game_Var_Pop_Fields = {
  __typename?: 'game_var_pop_fields';
  code_complexity?: Maybe<Scalars['Float']>;
  code_length?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Game_Var_Samp_Fields = {
  __typename?: 'game_var_samp_fields';
  code_complexity?: Maybe<Scalars['Float']>;
  code_length?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Game_Variance_Fields = {
  __typename?: 'game_variance_fields';
  code_complexity?: Maybe<Scalars['Float']>;
  code_length?: Maybe<Scalars['Float']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "game" */
  delete_game?: Maybe<Game_Mutation_Response>;
  /** delete single row from the table: "game" */
  delete_game_by_pk?: Maybe<Game>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_game" */
  delete_user_game?: Maybe<User_Game_Mutation_Response>;
  /** delete single row from the table: "user_game" */
  delete_user_game_by_pk?: Maybe<User_Game>;
  /** delete data from the table: "user_guess" */
  delete_user_guess?: Maybe<User_Guess_Mutation_Response>;
  /** delete single row from the table: "user_guess" */
  delete_user_guess_by_pk?: Maybe<User_Guess>;
  /** insert data into the table: "game" */
  insert_game?: Maybe<Game_Mutation_Response>;
  /** insert a single row into the table: "game" */
  insert_game_one?: Maybe<Game>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_game" */
  insert_user_game?: Maybe<User_Game_Mutation_Response>;
  /** insert a single row into the table: "user_game" */
  insert_user_game_one?: Maybe<User_Game>;
  /** insert data into the table: "user_guess" */
  insert_user_guess?: Maybe<User_Guess_Mutation_Response>;
  /** insert a single row into the table: "user_guess" */
  insert_user_guess_one?: Maybe<User_Guess>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  signup?: Maybe<SignupOutput>;
  /** update data of the table: "game" */
  update_game?: Maybe<Game_Mutation_Response>;
  /** update single row of the table: "game" */
  update_game_by_pk?: Maybe<Game>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_game" */
  update_user_game?: Maybe<User_Game_Mutation_Response>;
  /** update single row of the table: "user_game" */
  update_user_game_by_pk?: Maybe<User_Game>;
  /** update data of the table: "user_guess" */
  update_user_guess?: Maybe<User_Guess_Mutation_Response>;
  /** update single row of the table: "user_guess" */
  update_user_guess_by_pk?: Maybe<User_Guess>;
};


/** mutation root */
export type Mutation_RootDelete_GameArgs = {
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  hash: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_GameArgs = {
  where: User_Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_GuessArgs = {
  where: User_Guess_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Guess_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_GameArgs = {
  objects: Array<Game_Insert_Input>;
  on_conflict?: InputMaybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_OneArgs = {
  object: Game_Insert_Input;
  on_conflict?: InputMaybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GameArgs = {
  objects: Array<User_Game_Insert_Input>;
  on_conflict?: InputMaybe<User_Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Game_OneArgs = {
  object: User_Game_Insert_Input;
  on_conflict?: InputMaybe<User_Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GuessArgs = {
  objects: Array<User_Guess_Insert_Input>;
  on_conflict?: InputMaybe<User_Guess_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Guess_OneArgs = {
  object: User_Guess_Insert_Input;
  on_conflict?: InputMaybe<User_Guess_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GameArgs = {
  _append?: InputMaybe<Game_Append_Input>;
  _delete_at_path?: InputMaybe<Game_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Game_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Game_Delete_Key_Input>;
  _inc?: InputMaybe<Game_Inc_Input>;
  _prepend?: InputMaybe<Game_Prepend_Input>;
  _set?: InputMaybe<Game_Set_Input>;
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_By_PkArgs = {
  _append?: InputMaybe<Game_Append_Input>;
  _delete_at_path?: InputMaybe<Game_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Game_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Game_Delete_Key_Input>;
  _inc?: InputMaybe<Game_Inc_Input>;
  _prepend?: InputMaybe<Game_Prepend_Input>;
  _set?: InputMaybe<Game_Set_Input>;
  pk_columns: Game_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GameArgs = {
  _set?: InputMaybe<User_Game_Set_Input>;
  where: User_Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Game_By_PkArgs = {
  _set?: InputMaybe<User_Game_Set_Input>;
  pk_columns: User_Game_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GuessArgs = {
  _set?: InputMaybe<User_Guess_Set_Input>;
  where: User_Guess_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Guess_By_PkArgs = {
  _set?: InputMaybe<User_Guess_Set_Input>;
  pk_columns: User_Guess_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_game" */
  user_game: Array<User_Game>;
  /** fetch aggregated fields from the table: "user_game" */
  user_game_aggregate: User_Game_Aggregate;
  /** fetch data from the table: "user_game" using primary key columns */
  user_game_by_pk?: Maybe<User_Game>;
  /** fetch data from the table: "user_guess" */
  user_guess: Array<User_Guess>;
  /** fetch aggregated fields from the table: "user_guess" */
  user_guess_aggregate: User_Guess_Aggregate;
  /** fetch data from the table: "user_guess" using primary key columns */
  user_guess_by_pk?: Maybe<User_Guess>;
};


export type Query_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  hash: Scalars['String'];
};


export type Query_RootUser_GameArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};


export type Query_RootUser_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};


export type Query_RootUser_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_GuessArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};


export type Query_RootUser_Guess_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};


export type Query_RootUser_Guess_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_game" */
  user_game: Array<User_Game>;
  /** fetch aggregated fields from the table: "user_game" */
  user_game_aggregate: User_Game_Aggregate;
  /** fetch data from the table: "user_game" using primary key columns */
  user_game_by_pk?: Maybe<User_Game>;
  /** fetch data from the table: "user_guess" */
  user_guess: Array<User_Guess>;
  /** fetch aggregated fields from the table: "user_guess" */
  user_guess_aggregate: User_Guess_Aggregate;
  /** fetch data from the table: "user_guess" using primary key columns */
  user_guess_by_pk?: Maybe<User_Guess>;
};


export type Subscription_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  hash: Scalars['String'];
};


export type Subscription_RootUser_GameArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};


export type Subscription_RootUser_Game_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};


export type Subscription_RootUser_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_GuessArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};


export type Subscription_RootUser_Guess_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};


export type Subscription_RootUser_Guess_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  hash: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_games: Array<User_Game>;
  /** An aggregate relationship */
  user_games_aggregate: User_Game_Aggregate;
  /** An array relationship */
  user_guesses: Array<User_Guess>;
  /** An aggregate relationship */
  user_guesses_aggregate: User_Guess_Aggregate;
};


/** columns and relationships of "user" */
export type UserUser_GamesArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Game_Order_By>>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_GuessesArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Guesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_games?: InputMaybe<User_Game_Bool_Exp>;
  user_guesses?: InputMaybe<User_Guess_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserHashKey = 'user_hash_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** columns and relationships of "user_game" */
export type User_Game = {
  __typename?: 'user_game';
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  game: Game;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  lost_at?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An array relationship */
  user_guesses: Array<User_Guess>;
  /** An aggregate relationship */
  user_guesses_aggregate: User_Guess_Aggregate;
  user_hash: Scalars['String'];
};


/** columns and relationships of "user_game" */
export type User_GameUser_GuessesArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};


/** columns and relationships of "user_game" */
export type User_GameUser_Guesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Guess_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Guess_Order_By>>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};

/** aggregated selection of "user_game" */
export type User_Game_Aggregate = {
  __typename?: 'user_game_aggregate';
  aggregate?: Maybe<User_Game_Aggregate_Fields>;
  nodes: Array<User_Game>;
};

/** aggregate fields of "user_game" */
export type User_Game_Aggregate_Fields = {
  __typename?: 'user_game_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Game_Max_Fields>;
  min?: Maybe<User_Game_Min_Fields>;
};


/** aggregate fields of "user_game" */
export type User_Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_game" */
export type User_Game_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Game_Max_Order_By>;
  min?: InputMaybe<User_Game_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_game" */
export type User_Game_Arr_Rel_Insert_Input = {
  data: Array<User_Game_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Game_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_game". All fields are combined with a logical 'AND'. */
export type User_Game_Bool_Exp = {
  _and?: InputMaybe<Array<User_Game_Bool_Exp>>;
  _not?: InputMaybe<User_Game_Bool_Exp>;
  _or?: InputMaybe<Array<User_Game_Bool_Exp>>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  game?: InputMaybe<Game_Bool_Exp>;
  game_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lost_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_guesses?: InputMaybe<User_Guess_Bool_Exp>;
  user_hash?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_game" */
export enum User_Game_Constraint {
  /** unique or primary key constraint */
  UserGamePkey = 'user_game_pkey'
}

/** input type for inserting data into table "user_game" */
export type User_Game_Insert_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  game?: InputMaybe<Game_Obj_Rel_Insert_Input>;
  game_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lost_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_guesses?: InputMaybe<User_Guess_Arr_Rel_Insert_Input>;
  user_hash?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Game_Max_Fields = {
  __typename?: 'user_game_max_fields';
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lost_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_hash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_game" */
export type User_Game_Max_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lost_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Game_Min_Fields = {
  __typename?: 'user_game_min_fields';
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lost_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_hash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_game" */
export type User_Game_Min_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lost_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_game" */
export type User_Game_Mutation_Response = {
  __typename?: 'user_game_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Game>;
};

/** input type for inserting object relation for remote table "user_game" */
export type User_Game_Obj_Rel_Insert_Input = {
  data: User_Game_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Game_On_Conflict>;
};

/** on_conflict condition type for table "user_game" */
export type User_Game_On_Conflict = {
  constraint: User_Game_Constraint;
  update_columns?: Array<User_Game_Update_Column>;
  where?: InputMaybe<User_Game_Bool_Exp>;
};

/** Ordering options when selecting data from "user_game". */
export type User_Game_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  game?: InputMaybe<Game_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lost_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_guesses_aggregate?: InputMaybe<User_Guess_Aggregate_Order_By>;
  user_hash?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_game */
export type User_Game_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_game" */
export enum User_Game_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  LostAt = 'lost_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserHash = 'user_hash'
}

/** input type for updating data in table "user_game" */
export type User_Game_Set_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  game_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lost_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_hash?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_game" */
export enum User_Game_Update_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  LostAt = 'lost_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserHash = 'user_hash'
}

/** columns and relationships of "user_guess" */
export type User_Guess = {
  __typename?: 'user_guess';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  current_game: User_Game;
  id: Scalars['uuid'];
  input_code: Scalars['_numeric'];
  result_code?: Maybe<Scalars['_numeric']>;
  /** An object relationship */
  user: User;
  user_game_id: Scalars['uuid'];
  user_hash: Scalars['String'];
};

/** aggregated selection of "user_guess" */
export type User_Guess_Aggregate = {
  __typename?: 'user_guess_aggregate';
  aggregate?: Maybe<User_Guess_Aggregate_Fields>;
  nodes: Array<User_Guess>;
};

/** aggregate fields of "user_guess" */
export type User_Guess_Aggregate_Fields = {
  __typename?: 'user_guess_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Guess_Max_Fields>;
  min?: Maybe<User_Guess_Min_Fields>;
};


/** aggregate fields of "user_guess" */
export type User_Guess_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Guess_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_guess" */
export type User_Guess_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Guess_Max_Order_By>;
  min?: InputMaybe<User_Guess_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_guess" */
export type User_Guess_Arr_Rel_Insert_Input = {
  data: Array<User_Guess_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Guess_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_guess". All fields are combined with a logical 'AND'. */
export type User_Guess_Bool_Exp = {
  _and?: InputMaybe<Array<User_Guess_Bool_Exp>>;
  _not?: InputMaybe<User_Guess_Bool_Exp>;
  _or?: InputMaybe<Array<User_Guess_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_game?: InputMaybe<User_Game_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input_code?: InputMaybe<_Numeric_Comparison_Exp>;
  result_code?: InputMaybe<_Numeric_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_game_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_hash?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_guess" */
export enum User_Guess_Constraint {
  /** unique or primary key constraint */
  UserGuessPkey = 'user_guess_pkey',
  /** unique or primary key constraint */
  UserGuessUserIdReplaceKey = 'user_guess_user_id_replace_key'
}

/** input type for inserting data into table "user_guess" */
export type User_Guess_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  current_game?: InputMaybe<User_Game_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  input_code?: InputMaybe<Scalars['_numeric']>;
  result_code?: InputMaybe<Scalars['_numeric']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_game_id?: InputMaybe<Scalars['uuid']>;
  user_hash?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Guess_Max_Fields = {
  __typename?: 'user_guess_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  user_game_id?: Maybe<Scalars['uuid']>;
  user_hash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_guess" */
export type User_Guess_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_game_id?: InputMaybe<Order_By>;
  user_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Guess_Min_Fields = {
  __typename?: 'user_guess_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  user_game_id?: Maybe<Scalars['uuid']>;
  user_hash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_guess" */
export type User_Guess_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_game_id?: InputMaybe<Order_By>;
  user_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_guess" */
export type User_Guess_Mutation_Response = {
  __typename?: 'user_guess_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Guess>;
};

/** on_conflict condition type for table "user_guess" */
export type User_Guess_On_Conflict = {
  constraint: User_Guess_Constraint;
  update_columns?: Array<User_Guess_Update_Column>;
  where?: InputMaybe<User_Guess_Bool_Exp>;
};

/** Ordering options when selecting data from "user_guess". */
export type User_Guess_Order_By = {
  created_at?: InputMaybe<Order_By>;
  current_game?: InputMaybe<User_Game_Order_By>;
  id?: InputMaybe<Order_By>;
  input_code?: InputMaybe<Order_By>;
  result_code?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_game_id?: InputMaybe<Order_By>;
  user_hash?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_guess */
export type User_Guess_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_guess" */
export enum User_Guess_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InputCode = 'input_code',
  /** column name */
  ResultCode = 'result_code',
  /** column name */
  UserGameId = 'user_game_id',
  /** column name */
  UserHash = 'user_hash'
}

/** input type for updating data in table "user_guess" */
export type User_Guess_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  input_code?: InputMaybe<Scalars['_numeric']>;
  result_code?: InputMaybe<Scalars['_numeric']>;
  user_game_id?: InputMaybe<Scalars['uuid']>;
  user_hash?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_guess" */
export enum User_Guess_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InputCode = 'input_code',
  /** column name */
  ResultCode = 'result_code',
  /** column name */
  UserGameId = 'user_game_id',
  /** column name */
  UserHash = 'user_hash'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_games?: InputMaybe<User_Game_Arr_Rel_Insert_Input>;
  user_guesses?: InputMaybe<User_Guess_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_games_aggregate?: InputMaybe<User_Game_Aggregate_Order_By>;
  user_guesses_aggregate?: InputMaybe<User_Guess_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  hash: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type CreateGameMutationVariables = Exact<{
  game_id: Scalars['uuid'];
}>;


export type CreateGameMutation = { __typename?: 'mutation_root', insert_user_game_one?: { __typename?: 'user_game', game_id: any } | null };

export type CreateUserMutationVariables = Exact<{
  hash?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename?: 'user', hash: string } | null };

export type GameDetailsSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GameDetailsSubscription = { __typename?: 'subscription_root', user_game_by_pk?: { __typename?: 'user_game', lost_at?: any | null, completed_at?: any | null, user_guesses: Array<{ __typename?: 'user_guess', input_code: any, result_code?: any | null }> } | null };

export type GetOriginalGameCodeQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetOriginalGameCodeQuery = { __typename?: 'query_root', user_game_by_pk?: { __typename?: 'user_game', user_guesses_aggregate: { __typename?: 'user_guess_aggregate', aggregate?: { __typename?: 'user_guess_aggregate_fields', count: number } | null }, game: { __typename?: 'game', code_complexity: number, code: any } } | null };

export type GetLatestGameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestGameQuery = { __typename?: 'query_root', game: Array<{ __typename?: 'game', code_complexity: number, code_length: number }> };

export type MakeGuessMutationVariables = Exact<{
  input_code: Scalars['_numeric'];
  user_game_id: Scalars['uuid'];
}>;


export type MakeGuessMutation = { __typename?: 'mutation_root', insert_user_guess_one?: { __typename?: 'user_guess', input_code: any } | null };

export type SignupMutationVariables = Exact<{ [key: string]: never; }>;


export type SignupMutation = { __typename?: 'mutation_root', signup?: { __typename?: 'SignupOutput', token: string } | null };

export type UpdateGuessMutationVariables = Exact<{
  guess_id: Scalars['uuid'];
  result_code?: InputMaybe<Scalars['_numeric']>;
}>;


export type UpdateGuessMutation = { __typename?: 'mutation_root', update_user_guess_by_pk?: { __typename?: 'user_guess', id: any } | null };

export type YouLostMutationVariables = Exact<{
  game_id: Scalars['uuid'];
  guess_id: Scalars['uuid'];
  result_code?: InputMaybe<Scalars['_numeric']>;
}>;


export type YouLostMutation = { __typename?: 'mutation_root', insert_user_game_one?: { __typename?: 'user_game', id: any } | null };

export type YouWonMutationVariables = Exact<{
  game_id: Scalars['uuid'];
  guess_id: Scalars['uuid'];
  result_code?: InputMaybe<Scalars['_numeric']>;
}>;


export type YouWonMutation = { __typename?: 'mutation_root', insert_user_game_one?: { __typename?: 'user_game', id: any } | null };


export const CreateGameDocument = gql`
    mutation CreateGame($game_id: uuid!) {
  insert_user_game_one(
    object: {game_id: $game_id}
    on_conflict: {constraint: user_game_pkey}
  ) {
    game_id
  }
}
    `;

export function useCreateGameMutation() {
  return Urql.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument);
};
export const CreateUserDocument = gql`
    mutation CreateUser($hash: String) {
  insert_user_one(object: {hash: $hash}) {
    hash
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const GameDetailsDocument = gql`
    subscription GameDetails($id: uuid!) {
  user_game_by_pk(id: $id) {
    lost_at
    completed_at
    user_guesses {
      input_code
      result_code
    }
  }
}
    `;

export function useGameDetailsSubscription<TData = GameDetailsSubscription>(options: Omit<Urql.UseSubscriptionArgs<GameDetailsSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<GameDetailsSubscription, TData>) {
  return Urql.useSubscription<GameDetailsSubscription, TData, GameDetailsSubscriptionVariables>({ query: GameDetailsDocument, ...options }, handler);
};
export const GetOriginalGameCodeDocument = gql`
    query GetOriginalGameCode($id: uuid!) {
  user_game_by_pk(id: $id) {
    user_guesses_aggregate {
      aggregate {
        count
      }
    }
    game {
      code_complexity
      code
    }
  }
}
    `;

export function useGetOriginalGameCodeQuery(options: Omit<Urql.UseQueryArgs<GetOriginalGameCodeQueryVariables>, 'query'>) {
  return Urql.useQuery<GetOriginalGameCodeQuery>({ query: GetOriginalGameCodeDocument, ...options });
};
export const GetLatestGameDocument = gql`
    query GetLatestGame {
  game(limit: 1, order_by: {created_at: asc}) {
    code_complexity
    code_length
  }
}
    `;

export function useGetLatestGameQuery(options?: Omit<Urql.UseQueryArgs<GetLatestGameQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLatestGameQuery>({ query: GetLatestGameDocument, ...options });
};
export const MakeGuessDocument = gql`
    mutation MakeGuess($input_code: _numeric!, $user_game_id: uuid!) {
  insert_user_guess_one(
    object: {input_code: $input_code, user_game_id: $user_game_id}
  ) {
    input_code
  }
}
    `;

export function useMakeGuessMutation() {
  return Urql.useMutation<MakeGuessMutation, MakeGuessMutationVariables>(MakeGuessDocument);
};
export const SignupDocument = gql`
    mutation Signup {
  signup {
    token
  }
}
    `;

export function useSignupMutation() {
  return Urql.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument);
};
export const UpdateGuessDocument = gql`
    mutation UpdateGuess($guess_id: uuid!, $result_code: _numeric) {
  update_user_guess_by_pk(
    pk_columns: {id: $guess_id}
    _set: {result_code: $result_code}
  ) {
    id
  }
}
    `;

export function useUpdateGuessMutation() {
  return Urql.useMutation<UpdateGuessMutation, UpdateGuessMutationVariables>(UpdateGuessDocument);
};
export const YouLostDocument = gql`
    mutation YouLost($game_id: uuid!, $guess_id: uuid!, $result_code: _numeric) {
  insert_user_game_one(
    object: {id: $game_id, lost_at: "now()", user_guesses: {data: {id: $guess_id, result_code: $result_code}, on_conflict: {update_columns: [result_code], constraint: user_guess_pkey}}}
    on_conflict: {constraint: user_game_pkey, update_columns: [updated_at, lost_at]}
  ) {
    id
  }
}
    `;

export function useYouLostMutation() {
  return Urql.useMutation<YouLostMutation, YouLostMutationVariables>(YouLostDocument);
};
export const YouWonDocument = gql`
    mutation YouWon($game_id: uuid!, $guess_id: uuid!, $result_code: _numeric) {
  insert_user_game_one(
    object: {id: $game_id, completed_at: "now()", user_guesses: {data: {id: $guess_id, result_code: $result_code}, on_conflict: {update_columns: [result_code], constraint: user_guess_pkey}}}
    on_conflict: {constraint: user_game_pkey, update_columns: [updated_at, completed_at]}
  ) {
    id
  }
}
    `;

export function useYouWonMutation() {
  return Urql.useMutation<YouWonMutation, YouWonMutationVariables>(YouWonDocument);
};

export const CreateGame = gql`
    mutation CreateGame($game_id: uuid!) {
  insert_user_game_one(
    object: {game_id: $game_id}
    on_conflict: {constraint: user_game_pkey}
  ) {
    game_id
  }
}
    `;
export const CreateUser = gql`
    mutation CreateUser($hash: String) {
  insert_user_one(object: {hash: $hash}) {
    hash
  }
}
    `;
export const GameDetails = gql`
    subscription GameDetails($id: uuid!) {
  user_game_by_pk(id: $id) {
    lost_at
    completed_at
    user_guesses {
      input_code
      result_code
    }
  }
}
    `;
export const GetOriginalGameCode = gql`
    query GetOriginalGameCode($id: uuid!) {
  user_game_by_pk(id: $id) {
    user_guesses_aggregate {
      aggregate {
        count
      }
    }
    game {
      code_complexity
      code
    }
  }
}
    `;
export const GetLatestGame = gql`
    query GetLatestGame {
  game(limit: 1, order_by: {created_at: asc}) {
    code_complexity
    code_length
  }
}
    `;
export const MakeGuess = gql`
    mutation MakeGuess($input_code: _numeric!, $user_game_id: uuid!) {
  insert_user_guess_one(
    object: {input_code: $input_code, user_game_id: $user_game_id}
  ) {
    input_code
  }
}
    `;
export const Signup = gql`
    mutation Signup {
  signup {
    token
  }
}
    `;
export const UpdateGuess = gql`
    mutation UpdateGuess($guess_id: uuid!, $result_code: _numeric) {
  update_user_guess_by_pk(
    pk_columns: {id: $guess_id}
    _set: {result_code: $result_code}
  ) {
    id
  }
}
    `;
export const YouLost = gql`
    mutation YouLost($game_id: uuid!, $guess_id: uuid!, $result_code: _numeric) {
  insert_user_game_one(
    object: {id: $game_id, lost_at: "now()", user_guesses: {data: {id: $guess_id, result_code: $result_code}, on_conflict: {update_columns: [result_code], constraint: user_guess_pkey}}}
    on_conflict: {constraint: user_game_pkey, update_columns: [updated_at, lost_at]}
  ) {
    id
  }
}
    `;
export const YouWon = gql`
    mutation YouWon($game_id: uuid!, $guess_id: uuid!, $result_code: _numeric) {
  insert_user_game_one(
    object: {id: $game_id, completed_at: "now()", user_guesses: {data: {id: $guess_id, result_code: $result_code}, on_conflict: {update_columns: [result_code], constraint: user_guess_pkey}}}
    on_conflict: {constraint: user_game_pkey, update_columns: [updated_at, completed_at]}
  ) {
    id
  }
}
    `;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": {
      "name": "subscription_root"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "SignupOutput",
        "fields": [
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "code_complexity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "game_config",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": [
              {
                "name": "path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_game",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "users_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_game_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "game_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "game",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "game_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "game_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "game_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "game_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "game_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "game_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "game_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "game_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "game_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "game_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_avg_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_max_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_min_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "game",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_stddev_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_stddev_pop_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_stddev_samp_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_sum_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_var_pop_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_var_samp_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "game_variance_fields",
        "fields": [
          {
            "name": "code_complexity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code_length",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_game",
            "type": {
              "kind": "OBJECT",
              "name": "game_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "game",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user",
            "type": {
              "kind": "OBJECT",
              "name": "user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "hash",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user_game",
            "type": {
              "kind": "OBJECT",
              "name": "user_game_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user_game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_game",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user_guess",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user_guess_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insert_game",
            "type": {
              "kind": "OBJECT",
              "name": "game_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_game_one",
            "type": {
              "kind": "OBJECT",
              "name": "game",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user",
            "type": {
              "kind": "OBJECT",
              "name": "user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user_game",
            "type": {
              "kind": "OBJECT",
              "name": "user_game_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user_game_one",
            "type": {
              "kind": "OBJECT",
              "name": "user_game",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user_guess",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user_guess_one",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user_one",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "signup",
            "type": {
              "kind": "OBJECT",
              "name": "SignupOutput",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "update_game",
            "type": {
              "kind": "OBJECT",
              "name": "game_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "game",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user",
            "type": {
              "kind": "OBJECT",
              "name": "user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user_game",
            "type": {
              "kind": "OBJECT",
              "name": "user_game_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user_game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_game",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user_guess",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user_guess_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "game",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "game_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "game_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "game",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "hash",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user_game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_game",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_game_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_game_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_game",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user_guess",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_guess",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_guess_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_guess_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_guess_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "game",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "game_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "game_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "game",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "hash",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user_game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_game",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_game_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_game_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_game_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_game",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user_guess",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_guess",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_guess_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_guess_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_guess_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user_games",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_game",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_games_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_game_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_guesses",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_guess",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_guesses_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_guess_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "user_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "user_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "user_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_game",
        "fields": [
          {
            "name": "completed_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "game",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "game_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lost_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "user_guesses",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_guess",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_guesses_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_guess_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_hash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_game_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "user_game_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_game",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_game_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "user_game_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "user_game_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_game_max_fields",
        "fields": [
          {
            "name": "completed_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "game_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lost_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_hash",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_game_min_fields",
        "fields": [
          {
            "name": "completed_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "game_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lost_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_hash",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_game_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_game",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_guess",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "current_game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_game",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "input_code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "result_code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "user_game_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user_hash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_guess_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_guess",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_guess_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "user_guess_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_guess_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_game_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_hash",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_guess_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_game_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_hash",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_guess_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user_guess",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hash",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hash",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;