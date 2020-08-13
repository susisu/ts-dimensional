import { KNatural, N, Add as AddN, Sub as SubN } from "./natural";

/* eslint-disable prettier/prettier */

export type KInteger = {
  sign: Sign,
  abs: KNatural,
};
export type Sign = "+" | "-";

export type Integer<Z extends KInteger> =
  Z["abs"] extends N[0]
    ? { sign: "+", abs: N[0] }
    : Z;

export type MkInteger<S extends Sign, N extends KNatural> = Integer<{
  sign: S,
  abs: N,
}>;

export type Z = {
  [-9]: MkInteger<"-", N[9]>,
  [-8]: MkInteger<"-", N[8]>,
  [-7]: MkInteger<"-", N[7]>,
  [-6]: MkInteger<"-", N[6]>,
  [-5]: MkInteger<"-", N[5]>,
  [-4]: MkInteger<"-", N[4]>,
  [-3]: MkInteger<"-", N[3]>,
  [-2]: MkInteger<"-", N[2]>,
  [-1]: MkInteger<"-", N[1]>,
  [0]: MkInteger<"+", N[0]>,
  [1]: MkInteger<"+", N[1]>,
  [2]: MkInteger<"+", N[2]>,
  [3]: MkInteger<"+", N[3]>,
  [4]: MkInteger<"+", N[4]>,
  [5]: MkInteger<"+", N[5]>,
  [6]: MkInteger<"+", N[6]>,
  [7]: MkInteger<"+", N[7]>,
  [8]: MkInteger<"+", N[8]>,
  [9]: MkInteger<"+", N[9]>,
}

type SubNZ<N1 extends KNatural, N2 extends KNatural> =
  SubN<N1,  N2> extends never
    ? MkInteger<"-", SubN<N2, N1>>
    : MkInteger<"+", SubN<N1, N2>>;

export type Add<Z1 extends KInteger, Z2 extends KInteger> =
  Z1["sign"] extends "+"
    ? (
      Z2["sign"] extends "+"
        ? MkInteger<"+", AddN<Z1["abs"], Z2["abs"]>>
        : SubNZ<Z1["abs"], Z2["abs"]>
    )
    : (
      Z2["sign"] extends "+"
        ? SubNZ<Z2["abs"], Z1["abs"]>
        : MkInteger<"-", AddN<Z1["abs"], Z2["abs"]>>
    );
export type Sub<Z1 extends KInteger, Z2 extends KInteger> =
  Z1["sign"] extends "+"
    ? (
      Z2["sign"] extends "+"
        ? SubNZ<Z1["abs"], Z2["abs"]>
        : MkInteger<"+", AddN<Z1["abs"], Z2["abs"]>>
    )
    : (
      Z2["sign"] extends "+"
        ? MkInteger<"-", AddN<Z1["abs"], Z2["abs"]>>
        : SubNZ<Z2["abs"], Z1["abs"]>
    );
