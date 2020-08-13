import { Zero as ZeroN, One as OneN } from "../natural";
import { MkInteger, Zero as ZeroZ, One as OneZ } from "../integer";

/* eslint-disable prettier/prettier */

export { ZeroN, OneN };
export type TwoN = [never, never];
export type ThreeN = [never, never, never];

export { ZeroZ, OneZ };
export type TwoZ = MkInteger<"+", TwoN>;
export type ThreeZ = MkInteger<"+", ThreeN>;
export type MinusOneZ = MkInteger<"-", OneN>;
export type MinusTwoZ = MkInteger<"-", TwoN>;
export type MinusThreeZ = MkInteger<"-", ThreeN>;
