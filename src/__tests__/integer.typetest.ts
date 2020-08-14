import { MkInteger, Int, Add, Sub } from "../integer";
import { Nat } from "../natural";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// MkInteger

export type Test_MkInteger_0 = Assert<Equal<MkInteger<"+", Nat[0]>, { sign: "+", abs: Nat[0] }>>;
export type Test_MkInteger_1 = Assert<Equal<MkInteger<"-", Nat[0]>, { sign: "+", abs: Nat[0] }>>;
export type Test_MkInteger_2 = Assert<Equal<MkInteger<"+", Nat[1]>, { sign: "+", abs: Nat[1] }>>;
export type Test_MkInteger_3 = Assert<Equal<MkInteger<"-", Nat[1]>, { sign: "-", abs: Nat[1] }>>;

// Add

export type Test_Add_0 = Assert<Equal<Add<Int[0], Int[0]>, Int[0]>>;

export type Test_Add_1 = Assert<Equal<Add<Int[0], Int[1]>, Int[1]>>;
export type Test_Add_2 = Assert<Equal<Add<Int[1], Int[0]>, Int[1]>>;
export type Test_Add_3 = Assert<Equal<Add<Int[1], Int[2]>, Int[3]>>;
export type Test_Add_4 = Assert<Equal<Add<Int[2], Int[1]>, Int[3]>>;

export type Test_Add_5 = Assert<Equal<Add<Int[0], Int[-1]>, Int[-1]>>;
export type Test_Add_6 = Assert<Equal<Add<Int[1], Int[-2]>, Int[-1]>>;
export type Test_Add_7 = Assert<Equal<Add<Int[2], Int[-1]>, Int[1]>>;

export type Test_Add_8 = Assert<Equal<Add<Int[-1], Int[0]>, Int[-1]>>;
export type Test_Add_9 = Assert<Equal<Add<Int[-1], Int[2]>, Int[1]>>;
export type Test_Add_10 = Assert<Equal<Add<Int[-2], Int[1]>, Int[-1]>>;

export type Test_Add_11 = Assert<Equal<Add<Int[-1], Int[-2]>, Int[-3]>>;
export type Test_Add_12 = Assert<Equal<Add<Int[-2], Int[-1]>, Int[-3]>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<Int[0], Int[0]>, Int[0]>>;

export type Test_Sub_1 = Assert<Equal<Sub<Int[0], Int[1]>, Int[-1]>>;
export type Test_Sub_2 = Assert<Equal<Sub<Int[1], Int[0]>, Int[1]>>;
export type Test_Sub_3 = Assert<Equal<Sub<Int[1], Int[2]>, Int[-1]>>;
export type Test_Sub_4 = Assert<Equal<Sub<Int[2], Int[1]>, Int[1]>>;

export type Test_Sub_5 = Assert<Equal<Sub<Int[0], Int[-1]>, Int[1]>>;
export type Test_Sub_6 = Assert<Equal<Sub<Int[1], Int[-2]>, Int[3]>>;
export type Test_Sub_7 = Assert<Equal<Sub<Int[2], Int[-1]>, Int[3]>>;

export type Test_Sub_8 = Assert<Equal<Sub<Int[-1], Int[0]>, Int[-1]>>;
export type Test_Sub_9 = Assert<Equal<Sub<Int[-1], Int[2]>, Int[-3]>>;
export type Test_Sub_10 = Assert<Equal<Sub<Int[-2], Int[1]>, Int[-3]>>;

export type Test_Sub_11 = Assert<Equal<Sub<Int[-1], Int[-2]>, Int[1]>>;
export type Test_Sub_12 = Assert<Equal<Sub<Int[-2], Int[-1]>, Int[-1]>>;
