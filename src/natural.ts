/* eslint-disable prettier/prettier */

export type Natural = never[];

export type Zero = [];
export type One = [never];

export type Add<N1 extends Natural, N2 extends Natural> = [...N1, ...N2];
export type Sub<N1 extends Natural, N2 extends Natural> = N1 extends [...N2, ...infer N3] ? N3 : never;
