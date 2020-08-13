import { Zero, One, Add, Sub } from "../natural";
import { Equal, Assert } from "./assert";

type Two = [unknown, unknown];
type Three = [unknown, unknown, unknown];

// Add

export type Test_Add_0 = Assert<Equal<Add<Zero, Zero>, Zero>>;
export type Test_Add_1 = Assert<Equal<Add<One, Zero>, One>>;
export type Test_Add_2 = Assert<Equal<Add<Zero, One>, One>>;
export type Test_Add_3 = Assert<Equal<Add<One, Two>, Three>>;
export type Test_Add_4 = Assert<Equal<Add<Two, One>, Three>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<Zero, Zero>, Zero>>;
export type Test_Sub_1 = Assert<Equal<Sub<One, Zero>, One>>;
export type Test_Sub_2 = Assert<Equal<Sub<Zero, One>, never>>;
export type Test_Sub_3 = Assert<Equal<Sub<One, Two>, never>>;
export type Test_Sub_4 = Assert<Equal<Sub<Two, One>, One>>;
