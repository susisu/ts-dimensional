import { Zero as ZeroN, One as OneN } from "../natural";
import { MkInteger, Zero, One, Add, Sub } from "../integer";
import { Equal, Assert } from "./assert";

type MinusOne = { sign: "-", abs: OneN };

// MkInteger

export type Test_MkInteger_0 = Assert<Equal<MkInteger<"+", ZeroN>, Zero>>;
export type Test_MkInteger_1 = Assert<Equal<MkInteger<"-", ZeroN>, Zero>>;
export type Test_MkInteger_2 = Assert<Equal<MkInteger<"+", OneN>, One>>;
export type Test_MkInteger_3 = Assert<Equal<MkInteger<"-", OneN>, MinusOne>>;

type Two = MkInteger<"+", [unknown, unknown]>;
type Three = MkInteger<"+", [unknown, unknown, unknown]>;
type MinusTwo = MkInteger<"-", [unknown, unknown]>;
type MinusThree = MkInteger<"-", [unknown, unknown, unknown]>;

// Add

export type Test_Add_0 = Assert<Equal<Add<Zero, Zero>, Zero>>;

export type Test_Add_1 = Assert<Equal<Add<Zero, One>, One>>;
export type Test_Add_2 = Assert<Equal<Add<One, Zero>, One>>;
export type Test_Add_3 = Assert<Equal<Add<One, Two>, Three>>;
export type Test_Add_4 = Assert<Equal<Add<Two, One>, Three>>;

export type Test_Add_5 = Assert<Equal<Add<Zero, MinusOne>, MinusOne>>;
export type Test_Add_6 = Assert<Equal<Add<One, MinusTwo>, MinusOne>>;
export type Test_Add_7 = Assert<Equal<Add<Two, MinusOne>, One>>;

export type Test_Add_8 = Assert<Equal<Add<MinusOne, Zero>, MinusOne>>;
export type Test_Add_9 = Assert<Equal<Add<MinusOne, Two>, One>>;
export type Test_Add_10 = Assert<Equal<Add<MinusTwo, One>, MinusOne>>;

export type Test_Add_11 = Assert<Equal<Add<MinusOne, MinusTwo>, MinusThree>>;
export type Test_Add_12 = Assert<Equal<Add<MinusTwo, MinusOne>, MinusThree>>;

// Sub

export type Test_Sub_0 = Assert<Equal<Sub<Zero, Zero>, Zero>>;

export type Test_Sub_1 = Assert<Equal<Sub<Zero, One>, MinusOne>>;
export type Test_Sub_2 = Assert<Equal<Sub<One, Zero>, One>>;
export type Test_Sub_3 = Assert<Equal<Sub<One, Two>, MinusOne>>;
export type Test_Sub_4 = Assert<Equal<Sub<Two, One>, One>>;

export type Test_Sub_5 = Assert<Equal<Sub<Zero, MinusOne>, One>>;
export type Test_Sub_6 = Assert<Equal<Sub<One, MinusTwo>, Three>>;
export type Test_Sub_7 = Assert<Equal<Sub<Two, MinusOne>, Three>>;

export type Test_Sub_8 = Assert<Equal<Sub<MinusOne, Zero>, MinusOne>>;
export type Test_Sub_9 = Assert<Equal<Sub<MinusOne, Two>, MinusThree>>;
export type Test_Sub_10 = Assert<Equal<Sub<MinusTwo, One>, MinusThree>>;

export type Test_Sub_11 = Assert<Equal<Sub<MinusOne, MinusTwo>, One>>;
export type Test_Sub_12 = Assert<Equal<Sub<MinusTwo, MinusOne>, MinusOne>>;
