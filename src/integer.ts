import {
  Natural,
  Zero as ZeroN,
  One as OneN,
  Add as AddN,
  Sub as SubN,
} from "./natural";

export type Integer = {
  sign: Sign,
  abs: Natural,
};
export type Sign = "+" | "-";

type Canonical<Z extends Integer> =
  Z["abs"] extends ZeroN
    ? { sign: "+", abs: ZeroN }
    : Z;

export type MkInteger<S extends Sign, N extends Natural> = Canonical<{
  sign: S,
  abs: N,
}>;

export type Zero = MkInteger<"+", ZeroN>;
export type One = MkInteger<"+", OneN>;

type SubNZ<N1 extends Natural, N2 extends Natural> =
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
