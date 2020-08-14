import {
  KDimension,
  One as OneD,
  Mass as MassD,
  Length as LengthD,
  Time as TimeD,
  Mul as MulD,
  Div as DivD,
} from "./dimension";
import { KUnitSystem } from "./unitSystem";
import { KQuantity, MkQuantity } from "./quantity";
import {
  DimensionRepr,
  UnitSystemRepr,
  QuantityRepr,
  add as addRepr,
  sub as subRepr,
  mul as mulRepr,
  div as divRepr,
  conv as convRepr,
} from "./repr";

export type Dimension<D extends KDimension> = Readonly<{
  repr: DimensionRepr;
  $type: (x: D) => D;
}>;

export type UnitSystem<S extends KUnitSystem> = Readonly<{
  repr: UnitSystemRepr;
  $type: (x: S) => S;
}>;

export type Quantity<Q extends KQuantity> = Readonly<{
  repr: QuantityRepr;
  $type: (x: Q) => Q;
}>;

const id = <T>(x: T): T => x;

export function dimension<D extends KDimension>(repr: DimensionRepr): Dimension<D> {
  return { repr, $type: id };
}

export function unitSystem<S extends KUnitSystem>(repr: UnitSystemRepr): UnitSystem<S> {
  return { repr, $type: id };
}

export function quantity<Q extends KQuantity>(repr: QuantityRepr): Quantity<Q> {
  return { repr, $type: id };
}

export const oneD = dimension<OneD>({ M: 0, L: 0, T: 0 });
export const massD = dimension<MassD>({ M: 1, L: 0, T: 0 });
export const lengthD = dimension<LengthD>({ M: 0, L: 1, T: 0 });
export const timeD = dimension<TimeD>({ M: 0, L: 0, T: 1 });

export type Qty<D extends KDimension, S extends KUnitSystem> = Quantity<MkQuantity<D, S>>;

export function qty<D extends KDimension, S extends KUnitSystem>(
  value: number,
  dimension: Dimension<D>,
  unitSystem: UnitSystem<S>
): Qty<D, S> {
  return quantity({
    value,
    dimension: dimension.repr,
    unitSystem: unitSystem.repr,
  });
}

export function num<S extends KUnitSystem>(value: number, unitSystem: UnitSystem<S>): Qty<OneD, S> {
  return qty(value, oneD, unitSystem);
}

export function mass<S extends KUnitSystem>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<MassD, S> {
  return qty(value, massD, unitSystem);
}

export function length<S extends KUnitSystem>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<LengthD, S> {
  return qty(value, lengthD, unitSystem);
}

export function time<S extends KUnitSystem>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<TimeD, S> {
  return qty(value, timeD, unitSystem);
}

export function add<D extends KDimension, S extends KUnitSystem>(
  q1: Qty<D, S>,
  q2: Qty<D, S>
): Qty<D, S> {
  return quantity(addRepr(q1.repr, q2.repr));
}

export function sub<D extends KDimension, S extends KUnitSystem>(
  q1: Qty<D, S>,
  q2: Qty<D, S>
): Qty<D, S> {
  return quantity(subRepr(q1.repr, q2.repr));
}

export function mul<D1 extends KDimension, D2 extends KDimension, S extends KUnitSystem>(
  q1: Qty<D1, S>,
  q2: Qty<D2, S>
): Qty<MulD<D1, D2>, S> {
  return quantity(mulRepr(q1.repr, q2.repr));
}

export function div<D1 extends KDimension, D2 extends KDimension, S extends KUnitSystem>(
  q1: Qty<D1, S>,
  q2: Qty<D2, S>
): Qty<DivD<D1, D2>, S> {
  return quantity(divRepr(q1.repr, q2.repr));
}

export function conv<D extends KDimension, S1 extends KUnitSystem, S2 extends KUnitSystem>(
  q: Qty<D, S1>,
  toUnitSystem: UnitSystem<S2>
): Qty<D, S2> {
  return quantity(convRepr(q.repr, toUnitSystem.repr));
}
