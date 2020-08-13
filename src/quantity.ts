import { KDimension } from "./dimension";
import { UnitSystem } from "./unitSystem";

/* eslint-disable prettier/prettier */

export type Quantity = {
  dimension: KDimension,
  unitSystem: UnitSystem,
};

export type MkQuantity<D extends KDimension, S extends UnitSystem> = {
  dimension: D,
  unitSystem: S,
};
