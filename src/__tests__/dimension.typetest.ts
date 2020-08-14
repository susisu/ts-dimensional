import { Dimension, MkDimension, One, Mass, Length, Mul, Div } from "../dimension";
import { Int } from "../integer";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// Dimension

export type Test_Dimension = Assert<Equal<Dimension<{ M: Int[0], L: Int[1], T: Int[-1] }>, { M: Int[0], L: Int[1], T: Int[-1] }>>;

// MkDimension

export type Test_MkDimension_0 = Assert<Equal<MkDimension<{}>, { M: Int[0], L: Int[0], T: Int[0] }>>;
export type Test_MkDimension_1 = Assert<Equal<MkDimension<{ M: Int[1] }>, { M: Int[1], L: Int[0], T: Int[0] }>>;
export type Test_MkDimension_2 = Assert<Equal<MkDimension<{ L: Int[1] }>, { M: Int[0], L: Int[1], T: Int[0] }>>;
export type Test_MkDimension_3 = Assert<Equal<MkDimension<{ T: Int[1] }>, { M: Int[0], L: Int[0], T: Int[1] }>>;

// Mul

export type Test_Mul_0 = Assert<Equal<Mul<One, Mass>, Mass>>;
export type Test_Mul_1 = Assert<Equal<Mul<Mass, One>, Mass>>;
export type Test_Mul_2 = Assert<Equal<Mul<Mass, Mass>, MkDimension<{ M: Int[2] }>>>;
export type Test_Mul_3 = Assert<Equal<Mul<Mass, Length>, MkDimension<{ M: Int[1], L: Int[1] }>>>;

// Div

export type Test_Div_0 = Assert<Equal<Div<One, Mass>, MkDimension<{ M: Int[-1] }>>>;
export type Test_Div_1 = Assert<Equal<Div<Mass, One>, Mass>>;
export type Test_Div_2 = Assert<Equal<Div<Mass, Mass>, One>>;
export type Test_Div_3 = Assert<Equal<Div<Mass, Length>, MkDimension<{ M: Int[1], L: Int[-1] }>>>;
