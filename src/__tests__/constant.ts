import { N } from "../natural";
import { MkInteger, Zero as ZeroZ, One as OneZ } from "../integer";

/* eslint-disable prettier/prettier */

export { ZeroZ, OneZ };
export type TwoZ = MkInteger<"+", N[2]>;
export type ThreeZ = MkInteger<"+", N[3]>;
export type MinusOneZ = MkInteger<"-", N[1]>;
export type MinusTwoZ = MkInteger<"-", N[2]>;
export type MinusThreeZ = MkInteger<"-", N[3]>;
