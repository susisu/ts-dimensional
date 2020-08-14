import { NaturalKind, Nat, Add as AddN, Sub as SubN } from "./natural";

/* eslint-disable prettier/prettier */

export type KInteger = {
  sign: Sign,
  abs: NaturalKind,
};
export type Sign = "+" | "-";

export type Integer<Z extends KInteger> =
  Z["abs"] extends Nat[0]
    ? { sign: "+", abs: Nat[0] }
    : Z;

export type MkInteger<S extends Sign, N extends NaturalKind> = Integer<{
  sign: S,
  abs: N,
}>;

export type Z = {
  [-9]: MkInteger<"-", Nat[9]>,
  [-8]: MkInteger<"-", Nat[8]>,
  [-7]: MkInteger<"-", Nat[7]>,
  [-6]: MkInteger<"-", Nat[6]>,
  [-5]: MkInteger<"-", Nat[5]>,
  [-4]: MkInteger<"-", Nat[4]>,
  [-3]: MkInteger<"-", Nat[3]>,
  [-2]: MkInteger<"-", Nat[2]>,
  [-1]: MkInteger<"-", Nat[1]>,
  [0]: MkInteger<"+", Nat[0]>,
  [1]: MkInteger<"+", Nat[1]>,
  [2]: MkInteger<"+", Nat[2]>,
  [3]: MkInteger<"+", Nat[3]>,
  [4]: MkInteger<"+", Nat[4]>,
  [5]: MkInteger<"+", Nat[5]>,
  [6]: MkInteger<"+", Nat[6]>,
  [7]: MkInteger<"+", Nat[7]>,
  [8]: MkInteger<"+", Nat[8]>,
  [9]: MkInteger<"+", Nat[9]>,
}

type SubNZ<N1 extends NaturalKind, N2 extends NaturalKind> =
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
