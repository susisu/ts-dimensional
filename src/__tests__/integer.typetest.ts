import { MkInteger, Add, Sub } from "../integer";
import { N } from "../natural";
import { Equal, Assert } from "./assert";
import { ZeroZ, OneZ, TwoZ, ThreeZ, MinusOneZ, MinusTwoZ, MinusThreeZ } from "./constant";

/* eslint-disable prettier/prettier */

// MkInteger

export type Test_MkInteger_0 = Assert<Equal<MkInteger<"+", N[0]>, { sign: "+", abs: N[0] }>>;
export type Test_MkInteger_1 = Assert<Equal<MkInteger<"-", N[0]>, { sign: "+", abs: N[0] }>>;
export type Test_MkInteger_2 = Assert<Equal<MkInteger<"+", N[1]>, { sign: "+", abs: N[1] }>>;
export type Test_MkInteger_3 = Assert<Equal<MkInteger<"-", N[1]>, { sign: "-", abs: N[1] }>>;

// Add

export type Test_Add_0 = Assert<Equal<Add<ZeroZ, ZeroZ>, ZeroZ>>;

export type Test_Add_1 = Assert<Equal<Add<ZeroZ, OneZ>, OneZ>>;
export type Test_Add_2 = Assert<Equal<Add<OneZ, ZeroZ>, OneZ>>;
export type Test_Add_3 = Assert<Equal<Add<OneZ, TwoZ>, ThreeZ>>;
export type Test_Add_4 = Assert<Equal<Add<TwoZ, OneZ>, ThreeZ>>;

export type Test_Add_5 = Assert<Equal<Add<ZeroZ, MinusOneZ>, MinusOneZ>>;
export type Test_Add_6 = Assert<Equal<Add<OneZ, MinusTwoZ>, MinusOneZ>>;
export type Test_Add_7 = Assert<Equal<Add<TwoZ, MinusOneZ>, OneZ>>;

export type Test_Add_8 = Assert<Equal<Add<MinusOneZ, ZeroZ>, MinusOneZ>>;
export type Test_Add_9 = Assert<Equal<Add<MinusOneZ, TwoZ>, OneZ>>;
export type Test_Add_10 = Assert<Equal<Add<MinusTwoZ, OneZ>, MinusOneZ>>;

export type Test_Add_11 = Assert<Equal<Add<MinusOneZ, MinusTwoZ>, MinusThreeZ>>;
export type Test_Add_12 = Assert<Equal<Add<MinusTwoZ, MinusOneZ>, MinusThreeZ>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<ZeroZ, ZeroZ>, ZeroZ>>;

export type Test_Sub_1 = Assert<Equal<Sub<ZeroZ, OneZ>, MinusOneZ>>;
export type Test_Sub_2 = Assert<Equal<Sub<OneZ, ZeroZ>, OneZ>>;
export type Test_Sub_3 = Assert<Equal<Sub<OneZ, TwoZ>, MinusOneZ>>;
export type Test_Sub_4 = Assert<Equal<Sub<TwoZ, OneZ>, OneZ>>;

export type Test_Sub_5 = Assert<Equal<Sub<ZeroZ, MinusOneZ>, OneZ>>;
export type Test_Sub_6 = Assert<Equal<Sub<OneZ, MinusTwoZ>, ThreeZ>>;
export type Test_Sub_7 = Assert<Equal<Sub<TwoZ, MinusOneZ>, ThreeZ>>;

export type Test_Sub_8 = Assert<Equal<Sub<MinusOneZ, ZeroZ>, MinusOneZ>>;
export type Test_Sub_9 = Assert<Equal<Sub<MinusOneZ, TwoZ>, MinusThreeZ>>;
export type Test_Sub_10 = Assert<Equal<Sub<MinusTwoZ, OneZ>, MinusThreeZ>>;

export type Test_Sub_11 = Assert<Equal<Sub<MinusOneZ, MinusTwoZ>, OneZ>>;
export type Test_Sub_12 = Assert<Equal<Sub<MinusTwoZ, MinusOneZ>, MinusOneZ>>;
