import { DimensionKind } from "./dimension";
import { UnitSystemKind } from "./unitSystem";

/* eslint-disable prettier/prettier */

export type KQuantity = {
  dimension: DimensionKind,
  unitSystem: UnitSystemKind,
};

export type Quantity<Q extends KQuantity> = Q;

export type MkQuantity<D extends DimensionKind, S extends UnitSystemKind> = Quantity<{
  dimension: D,
  unitSystem: S,
}>;
