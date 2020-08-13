import { Natural, N, Add, Sub } from "../natural";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// Natural

export type Test_Natural_0 = Assert<Equal<Natural<[]>, []>>;
export type Test_Natural_1 = Assert<Equal<Natural<[never]>, [never]>>;

// Add

export type Test_Add_0 = Assert<Equal<Add<N[0], N[0]>, N[0]>>;
export type Test_Add_1 = Assert<Equal<Add<N[1], N[0]>, N[1]>>;
export type Test_Add_2 = Assert<Equal<Add<N[0], N[1]>, N[1]>>;
export type Test_Add_3 = Assert<Equal<Add<N[1], N[2]>, N[3]>>;
export type Test_Add_4 = Assert<Equal<Add<N[2], N[1]>, N[3]>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<N[0], N[0]>, N[0]>>;
export type Test_Sub_1 = Assert<Equal<Sub<N[1], N[0]>, N[1]>>;
export type Test_Sub_2 = Assert<Equal<Sub<N[0], N[1]>, never>>;
export type Test_Sub_3 = Assert<Equal<Sub<N[1], N[2]>, never>>;
export type Test_Sub_4 = Assert<Equal<Sub<N[2], N[1]>, N[1]>>;
