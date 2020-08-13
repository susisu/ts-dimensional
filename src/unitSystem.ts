import { Base } from "./dimension";

/* eslint-disable prettier/prettier */

export type Unit = string;
export type UnitSystem = { [B in Base]: Unit };

export type MkUnitSystem<S extends { [B in Base]: Unit }> = S;

export type Mks = MkUnitSystem<{
  M: "kilogram",
  L: "meter",
  T: "second",
}>;

export type Cgs = MkUnitSystem<{
  M: "gram",
  L: "centimeter",
  T: "second",
}>;
