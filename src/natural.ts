/* eslint-disable prettier/prettier */

export type KNatural = never[];

export type Natural<N extends KNatural> = N;

export type N = {
  [0]: Natural<[]>,
  [1]: Natural<[never]>,
  [2]: Natural<[never, never]>,
  [3]: Natural<[never, never, never]>,
  [4]: Natural<[never, never, never, never]>,
  [5]: Natural<[never, never, never, never, never]>,
  [6]: Natural<[never, never, never, never, never, never]>,
  [7]: Natural<[never, never, never, never, never, never, never]>,
  [8]: Natural<[never, never, never, never, never, never, never, never]>,
  [9]: Natural<[never, never, never, never, never, never, never, never, never]>,
}

export type Add<N1 extends KNatural, N2 extends KNatural> = [...N1, ...N2];
export type Sub<N1 extends KNatural, N2 extends KNatural> = N1 extends [...N2, ...infer N3] ? N3 : never;
