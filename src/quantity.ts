import { KDimension } from "./dimension";
import { KUnitSystem } from "./unitSystem";

/* eslint-disable prettier/prettier */

export type Quantity = {
  dimension: KDimension,
  unitSystem: KUnitSystem,
};

export type MkQuantity<D extends KDimension, S extends KUnitSystem> = {
  dimension: D,
  unitSystem: S,
};
