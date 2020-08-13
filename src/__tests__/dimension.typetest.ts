import { MkDimension, One, Mass, Length, Mul, Div } from "../dimension";
import { Z } from "../integer";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// MkDimension

export type Test_MkDimension_0 = Assert<Equal<MkDimension<{}>, { M: Z[0], L: Z[0], T: Z[0] }>>;
export type Test_MkDimension_1 = Assert<Equal<MkDimension<{ M: Z[1] }>, { M: Z[1], L: Z[0], T: Z[0] }>>;
export type Test_MkDimension_2 = Assert<Equal<MkDimension<{ L: Z[1] }>, { M: Z[0], L: Z[1], T: Z[0] }>>;
export type Test_MkDimension_3 = Assert<Equal<MkDimension<{ T: Z[1] }>, { M: Z[0], L: Z[0], T: Z[1] }>>;

// Mul

export type Test_Mul_0 = Assert<Equal<Mul<One, Mass>, Mass>>;
export type Test_Mul_1 = Assert<Equal<Mul<Mass, One>, Mass>>;
export type Test_Mul_2 = Assert<Equal<Mul<Mass, Mass>, MkDimension<{ M: Z[2] }>>>;
export type Test_Mul_3 = Assert<Equal<Mul<Mass, Length>, MkDimension<{ M: Z[1], L: Z[1] }>>>;

// Div

export type Test_Div_0 = Assert<Equal<Div<One, Mass>, MkDimension<{ M: Z[-1] }>>>;
export type Test_Div_1 = Assert<Equal<Div<Mass, One>, Mass>>;
export type Test_Div_2 = Assert<Equal<Div<Mass, Mass>, One>>;
export type Test_Div_3 = Assert<Equal<Div<Mass, Length>, MkDimension<{ M: Z[1], L: Z[-1] }>>>;
