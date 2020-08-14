import { IntegerKind, Int, Add as AddZ, Sub as SubZ } from "./integer";

/* eslint-disable prettier/prettier */

export const bases = ["M", "L", "T"] as const;
export type Base = typeof bases[number];

export type KDimension = { [B in Base]: IntegerKind };

export type Dimension<D extends KDimension> = D;

export type MkDimension<D extends Partial<KDimension>> = Dimension<{
  [B in Base]: B extends keyof D ? NonEmpty<ElimUndefined<D[B]>, Int[0]> : Int[0]
}>;
type ElimUndefined<X> = X extends undefined ? never : X
type NonEmpty<X, T> = [X] extends [never] ? T : X;

export type One = MkDimension<{}>;
export type Mass = MkDimension<{ M: Int[1] }>;
export type Length = MkDimension<{ L: Int[1] }>;
export type Time = MkDimension<{ T: Int[1] }>;

export type Mul<D1 extends KDimension, D2 extends KDimension> = {
  [B in Base]: AddZ<D1[B], D2[B]>
};
export type Div<D1 extends KDimension, D2 extends KDimension> = {
  [B in Base]: SubZ<D1[B], D2[B]>
};
