import { KNatural, N, Add as AddN, Sub as SubN } from "./natural";

/* eslint-disable prettier/prettier */

export type Integer = {
  sign: Sign,
  abs: KNatural,
};
export type Sign = "+" | "-";

type Canonical<Z extends Integer> =
  Z["abs"] extends N[0]
    ? { sign: "+", abs: N[0] }
    : Z;

export type MkInteger<S extends Sign, N extends KNatural> = Canonical<{
  sign: S,
  abs: N,
}>;

export type Zero = MkInteger<"+", N[0]>;
export type One = MkInteger<"+", N[1]>;

type SubNZ<N1 extends KNatural, N2 extends KNatural> =
  SubN<N1,  N2> extends never
    ? MkInteger<"-", SubN<N2, N1>>
    : MkInteger<"+", SubN<N1, N2>>;

export type Add<Z1 extends Integer, Z2 extends Integer> =
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
export type Sub<Z1 extends Integer, Z2 extends Integer> =
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
