import { KDimension } from "./dimension";
import { KUnitSystem } from "./unitSystem";

/* eslint-disable prettier/prettier */

export type KQuantity = {
  dimension: KDimension,
  unitSystem: KUnitSystem,
};

export type Quantity<Q extends KQuantity> = Q;

export type MkQuantity<D extends KDimension, S extends KUnitSystem> = Quantity<{
  dimension: D,
  unitSystem: S,
}>;
