import { DimensionKind } from "./dimension";
import { UnitSystemKind } from "./unitSystem";

/* eslint-disable prettier/prettier */

export type QuantityKind = {
  dimension: DimensionKind,
  unitSystem: UnitSystemKind,
};

type AsQuantity<Q extends QuantityKind> = Q;

export type MkQuantity<D extends DimensionKind, S extends UnitSystemKind> = AsQuantity<{
  dimension: D,
  unitSystem: S,
}>;
