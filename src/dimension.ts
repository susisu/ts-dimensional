import { IntegerKind, Int, Add as AddZ, Sub as SubZ } from "./integer";

/* eslint-disable prettier/prettier */

export const bases = ["M", "L", "T"] as const;
export type Base = typeof bases[number];

export type DimensionKind = { [B in Base]: IntegerKind };

type AsDimension<D extends DimensionKind> = D;

export type MkDimension<D extends Partial<DimensionKind>> = AsDimension<{
  [B in Base]: B extends keyof D ? NonEmpty<ElimUndefined<D[B]>, Int[0]> : Int[0]
}>;
type ElimUndefined<X> = X extends undefined ? never : X
type NonEmpty<X, T> = [X] extends [never] ? T : X;

export type One = MkDimension<{}>;
export type Mass = MkDimension<{ M: Int[1] }>;
export type Length = MkDimension<{ L: Int[1] }>;
export type Time = MkDimension<{ T: Int[1] }>;

export type Mul<D1 extends DimensionKind, D2 extends DimensionKind> = AsDimension<{
  [B in Base]: AddZ<D1[B], D2[B]>
}>;
export type Div<D1 extends DimensionKind, D2 extends DimensionKind> = AsDimension<{
  [B in Base]: SubZ<D1[B], D2[B]>
}>;
