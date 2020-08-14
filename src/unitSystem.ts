/* eslint-disable prettier/prettier */

export type UnitSystemKind = { name: string };

type AsUnitSystem<S extends UnitSystemKind> = S;

export type MkUnitSystem<S extends string> = AsUnitSystem<{ name: S }>;
