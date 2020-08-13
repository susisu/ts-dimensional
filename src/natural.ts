/* eslint-disable prettier/prettier */

export type KNatural = never[];

export type Natural<N extends KNatural> = N;

export type N = {
  [0]: [],
  [1]: [never],
  [2]: [never, never],
  [3]: [never, never, never],
  [4]: [never, never, never, never],
  [5]: [never, never, never, never, never],
  [6]: [never, never, never, never, never, never],
  [7]: [never, never, never, never, never, never, never],
  [8]: [never, never, never, never, never, never, never, never],
  [9]: [never, never, never, never, never, never, never, never, never],
}

export type Add<N1 extends KNatural, N2 extends KNatural> = [...N1, ...N2];
export type Sub<N1 extends KNatural, N2 extends KNatural> = N1 extends [...N2, ...infer N3] ? N3 : never;
