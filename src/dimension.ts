import {
  Integer,
  Zero as ZeroZ,
  One as OneZ,
  Add as AddZ,
  Sub as SubZ,
} from "./integer";

export const bases = ["M", "L", "T"] as const;
export type Base = typeof bases[number];

export type Dimension = { [B in Base]: Integer };

export type MkDimension<D extends { [B in Base]?: Integer }> = {
  [B in Base]:
    B extends keyof D
      ? (D[B] extends Integer ? D[B] : ZeroZ)
      : ZeroZ
};

export type One = MkDimension<{}>;
export type Mass = MkDimension<{ M: OneZ }>;
export type Length = MkDimension<{ L: OneZ }>;
export type Time = MkDimension<{ T: OneZ }>;

export type Mul<D1 extends Dimension, D2 extends Dimension> = {
  [B in Base]: AddZ<D1[B], D2[B]>
};
export type Div<D1 extends Dimension, D2 extends Dimension> = {
  [B in Base]: SubZ<D1[B], D2[B]>
};
