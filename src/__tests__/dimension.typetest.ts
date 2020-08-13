import { MkDimension, One, Mass, Length, Mul, Div } from "../dimension";
import { Equal, Assert } from "./assert";
import { ZeroZ, OneZ, TwoZ, MinusOneZ } from "./constant";

/* eslint-disable prettier/prettier */

// MkDimension

export type Test_MkDimension_0 = Assert<Equal<MkDimension<{}>, { M: ZeroZ, L: ZeroZ, T: ZeroZ }>>;
export type Test_MkDimension_1 = Assert<Equal<MkDimension<{ M: OneZ }>, { M: OneZ, L: ZeroZ, T: ZeroZ }>>;
export type Test_MkDimension_2 = Assert<Equal<MkDimension<{ L: OneZ }>, { M: ZeroZ, L: OneZ, T: ZeroZ }>>;
export type Test_MkDimension_3 = Assert<Equal<MkDimension<{ T: OneZ }>, { M: ZeroZ, L: ZeroZ, T: OneZ }>>;

// Mul

export type Test_Mul_0 = Assert<Equal<Mul<One, Mass>, Mass>>;
export type Test_Mul_1 = Assert<Equal<Mul<Mass, One>, Mass>>;
export type Test_Mul_2 = Assert<Equal<Mul<Mass, Mass>, MkDimension<{ M: TwoZ }>>>;
export type Test_Mul_3 = Assert<Equal<Mul<Mass, Length>, MkDimension<{ M: OneZ, L: OneZ }>>>;

// Div

export type Test_Div_0 = Assert<Equal<Div<One, Mass>, MkDimension<{ M: MinusOneZ }>>>;
export type Test_Div_1 = Assert<Equal<Div<Mass, One>, Mass>>;
export type Test_Div_2 = Assert<Equal<Div<Mass, Mass>, One>>;
export type Test_Div_3 = Assert<Equal<Div<Mass, Length>, MkDimension<{ M: OneZ, L: MinusOneZ }>>>;
