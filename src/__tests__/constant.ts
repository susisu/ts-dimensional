import { Zero as ZeroN, One as OneN } from "../natural";
import { MkInteger, Zero as ZeroZ, One as OneZ } from "../integer";

export { ZeroN, OneN };
export type TwoN = [unknown, unknown];
export type ThreeN = [unknown, unknown, unknown];

export { ZeroZ, OneZ };
export type TwoZ = MkInteger<"+", TwoN>;
export type ThreeZ = MkInteger<"+", ThreeN>;
export type MinusOneZ = MkInteger<"-", OneN>;
export type MinusTwoZ = MkInteger<"-", TwoN>;
export type MinusThreeZ = MkInteger<"-", ThreeN>;
