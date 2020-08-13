import { Dimension } from "./dimension";
import { UnitSystem } from "./unitSystem";

export type Quantity = {
  dimension: Dimension,
  unitSystem: UnitSystem,
};

export type MkQuantity<D extends Dimension, S extends UnitSystem> = {
  dimension: D,
  unitSystem: S,
};
