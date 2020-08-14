import { Nat, Succ, Pred, Add, Sub } from "../natural";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// Succ

export type Test_Succ_0 = Assert<Equal<Succ<Nat[0]>, Nat[1]>>;
export type Test_Succ_1 = Assert<Equal<Succ<Nat[1]>, Nat[2]>>;
export type Test_Succ_2 = Assert<Equal<Succ<Nat[2]>, Nat[3]>>;

// Pred

export type Test_Pred_0 = Assert<Equal<Pred<Nat[0]>, never>>;
export type Test_Pred_1 = Assert<Equal<Pred<Nat[1]>, Nat[0]>>;
export type Test_Pred_2 = Assert<Equal<Pred<Nat[2]>, Nat[1]>>;

// Add

export type Test_Add_0 = Assert<Equal<Add<Nat[0], Nat[0]>, Nat[0]>>;
export type Test_Add_1 = Assert<Equal<Add<Nat[1], Nat[0]>, Nat[1]>>;
export type Test_Add_2 = Assert<Equal<Add<Nat[0], Nat[1]>, Nat[1]>>;
export type Test_Add_3 = Assert<Equal<Add<Nat[1], Nat[2]>, Nat[3]>>;
export type Test_Add_4 = Assert<Equal<Add<Nat[2], Nat[1]>, Nat[3]>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<Nat[0], Nat[0]>, Nat[0]>>;
export type Test_Sub_1 = Assert<Equal<Sub<Nat[1], Nat[0]>, Nat[1]>>;
export type Test_Sub_2 = Assert<Equal<Sub<Nat[0], Nat[1]>, never>>;
export type Test_Sub_3 = Assert<Equal<Sub<Nat[1], Nat[2]>, never>>;
export type Test_Sub_4 = Assert<Equal<Sub<Nat[2], Nat[1]>, Nat[1]>>;
