import { Add, Sub } from "../natural";
import { Equal, Assert } from "./assert";
import { ZeroN, OneN, TwoN, ThreeN } from "./constant";

/* eslint-disable prettier/prettier */

// Add

export type Test_Add_0 = Assert<Equal<Add<ZeroN, ZeroN>, ZeroN>>;
export type Test_Add_1 = Assert<Equal<Add<OneN, ZeroN>, OneN>>;
export type Test_Add_2 = Assert<Equal<Add<ZeroN, OneN>, OneN>>;
export type Test_Add_3 = Assert<Equal<Add<OneN, TwoN>, ThreeN>>;
export type Test_Add_4 = Assert<Equal<Add<TwoN, OneN>, ThreeN>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<ZeroN, ZeroN>, ZeroN>>;
export type Test_Sub_1 = Assert<Equal<Sub<OneN, ZeroN>, OneN>>;
export type Test_Sub_2 = Assert<Equal<Sub<ZeroN, OneN>, never>>;
export type Test_Sub_3 = Assert<Equal<Sub<OneN, TwoN>, never>>;
export type Test_Sub_4 = Assert<Equal<Sub<TwoN, OneN>, OneN>>;
