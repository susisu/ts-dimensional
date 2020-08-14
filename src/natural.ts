/* eslint-disable prettier/prettier */

export type NaturalKind = never[];

type AsNatural<N extends NaturalKind> = N;

export type Nat = {
  [0]: AsNatural<[]>,
  [1]: AsNatural<[never]>,
  [2]: AsNatural<[never, never]>,
  [3]: AsNatural<[never, never, never]>,
  [4]: AsNatural<[never, never, never, never]>,
  [5]: AsNatural<[never, never, never, never, never]>,
  [6]: AsNatural<[never, never, never, never, never, never]>,
  [7]: AsNatural<[never, never, never, never, never, never, never]>,
  [8]: AsNatural<[never, never, never, never, never, never, never, never]>,
  [9]: AsNatural<[never, never, never, never, never, never, never, never, never]>,
}

export type Add<N1 extends NaturalKind, N2 extends NaturalKind> = [...N1, ...N2];
export type Sub<N1 extends NaturalKind, N2 extends NaturalKind> = N1 extends [...N2, ...infer N3] ? N3 : never;
