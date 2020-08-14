import { DimensionKind } from "./dimension";
import { KUnitSystem } from "./unitSystem";

/* eslint-disable prettier/prettier */

export type KQuantity = {
  dimension: DimensionKind,
  unitSystem: KUnitSystem,
};

export type Quantity<Q extends KQuantity> = Q;

export type MkQuantity<D extends DimensionKind, S extends KUnitSystem> = Quantity<{
  dimension: D,
  unitSystem: S,
}>;
