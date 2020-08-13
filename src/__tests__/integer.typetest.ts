import { Integer, MkInteger, Z, Add, Sub } from "../integer";
import { N } from "../natural";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// Integer

export type Test_Integer_0 = Assert<Equal<Integer<{ sign: "+", abs: N[0] }>, { sign: "+", abs: N[0] }>>;
export type Test_Integer_1 = Assert<Equal<Integer<{ sign: "-", abs: N[0] }>, { sign: "+", abs: N[0] }>>;
export type Test_Integer_2 = Assert<Equal<Integer<{ sign: "+", abs: N[1] }>, { sign: "+", abs: N[1] }>>;
export type Test_Integer_3 = Assert<Equal<Integer<{ sign: "-", abs: N[1] }>, { sign: "-", abs: N[1] }>>;

// MkInteger

export type Test_MkInteger_0 = Assert<Equal<MkInteger<"+", N[0]>, { sign: "+", abs: N[0] }>>;
export type Test_MkInteger_1 = Assert<Equal<MkInteger<"-", N[0]>, { sign: "+", abs: N[0] }>>;
export type Test_MkInteger_2 = Assert<Equal<MkInteger<"+", N[1]>, { sign: "+", abs: N[1] }>>;
export type Test_MkInteger_3 = Assert<Equal<MkInteger<"-", N[1]>, { sign: "-", abs: N[1] }>>;

// Add

export type Test_Add_0 = Assert<Equal<Add<Z[0], Z[0]>, Z[0]>>;

export type Test_Add_1 = Assert<Equal<Add<Z[0], Z[1]>, Z[1]>>;
export type Test_Add_2 = Assert<Equal<Add<Z[1], Z[0]>, Z[1]>>;
export type Test_Add_3 = Assert<Equal<Add<Z[1], Z[2]>, Z[3]>>;
export type Test_Add_4 = Assert<Equal<Add<Z[2], Z[1]>, Z[3]>>;

export type Test_Add_5 = Assert<Equal<Add<Z[0], Z[-1]>, Z[-1]>>;
export type Test_Add_6 = Assert<Equal<Add<Z[1], Z[-2]>, Z[-1]>>;
export type Test_Add_7 = Assert<Equal<Add<Z[2], Z[-1]>, Z[1]>>;

export type Test_Add_8 = Assert<Equal<Add<Z[-1], Z[0]>, Z[-1]>>;
export type Test_Add_9 = Assert<Equal<Add<Z[-1], Z[2]>, Z[1]>>;
export type Test_Add_10 = Assert<Equal<Add<Z[-2], Z[1]>, Z[-1]>>;

export type Test_Add_11 = Assert<Equal<Add<Z[-1], Z[-2]>, Z[-3]>>;
export type Test_Add_12 = Assert<Equal<Add<Z[-2], Z[-1]>, Z[-3]>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<Z[0], Z[0]>, Z[0]>>;

export type Test_Sub_1 = Assert<Equal<Sub<Z[0], Z[1]>, Z[-1]>>;
export type Test_Sub_2 = Assert<Equal<Sub<Z[1], Z[0]>, Z[1]>>;
export type Test_Sub_3 = Assert<Equal<Sub<Z[1], Z[2]>, Z[-1]>>;
export type Test_Sub_4 = Assert<Equal<Sub<Z[2], Z[1]>, Z[1]>>;

export type Test_Sub_5 = Assert<Equal<Sub<Z[0], Z[-1]>, Z[1]>>;
export type Test_Sub_6 = Assert<Equal<Sub<Z[1], Z[-2]>, Z[3]>>;
export type Test_Sub_7 = Assert<Equal<Sub<Z[2], Z[-1]>, Z[3]>>;

export type Test_Sub_8 = Assert<Equal<Sub<Z[-1], Z[0]>, Z[-1]>>;
export type Test_Sub_9 = Assert<Equal<Sub<Z[-1], Z[2]>, Z[-3]>>;
export type Test_Sub_10 = Assert<Equal<Sub<Z[-2], Z[1]>, Z[-3]>>;

export type Test_Sub_11 = Assert<Equal<Sub<Z[-1], Z[-2]>, Z[1]>>;
export type Test_Sub_12 = Assert<Equal<Sub<Z[-2], Z[-1]>, Z[-1]>>;
