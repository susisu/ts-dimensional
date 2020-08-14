/* eslint-disable prettier/prettier */

export type UnitSystemKind = string;

type AsUnitSystem<S extends UnitSystemKind> = S;

export type MkUnitSystem<S extends UnitSystemKind> = AsUnitSystem<S>;
