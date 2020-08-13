import { KInteger, Z, Add as AddZ, Sub as SubZ } from "./integer";

/* eslint-disable prettier/prettier */

export const bases = ["M", "L", "T"] as const;
export type Base = typeof bases[number];

export type Dimension = { [B in Base]: KInteger };

export type MkDimension<D extends { [B in Base]?: KInteger }> = {
  [B in Base]:
    B extends keyof D
      ? (D[B] extends KInteger ? D[B] : Z[0])
      : Z[0]
};

export type One = MkDimension<{}>;
export type Mass = MkDimension<{ M: Z[1] }>;
export type Length = MkDimension<{ L: Z[1] }>;
export type Time = MkDimension<{ T: Z[1] }>;

export type Mul<D1 extends Dimension, D2 extends Dimension> = {
  [B in Base]: AddZ<D1[B], D2[B]>
};
export type Div<D1 extends Dimension, D2 extends Dimension> = {
  [B in Base]: SubZ<D1[B], D2[B]>
};
