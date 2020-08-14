import {
  Base,
  bases,
  KDimension as DimensionT,
  One as OneT,
  Mass as MassT,
  Length as LengthT,
  Time as TimeT,
  Mul as MulDT,
  Div as DivDT,
} from "./dimension";
import { KUnitSystem as UnitSystemT } from "./unitSystem";
import { KQuantity as QuantityT, MkQuantity as MkQuantityT } from "./quantity";

export type DimensionRepr = Readonly<{ [B in Base]: number }>;
export type UnitRepr = Readonly<{
  name: string;
  coeff: number;
}>;
export type UnitSystemRepr = Readonly<{ [B in Base]: UnitRepr }>;
export type QuantityRepr = Readonly<{
  value: number;
  dimension: DimensionRepr;
  unitSystem: UnitSystemRepr;
}>;

function mulDR(d1: DimensionRepr, d2: DimensionRepr): DimensionRepr {
  return {
    M: d1.M + d2.M,
    L: d1.L + d2.L,
    T: d1.T + d2.T,
  };
}
function divDR(d1: DimensionRepr, d2: DimensionRepr): DimensionRepr {
  return {
    M: d1.M - d2.M,
    L: d1.L - d2.L,
    T: d1.T - d2.T,
  };
}
function ratioR(d: DimensionRepr, s1: UnitSystemRepr, s2: UnitSystemRepr): number {
  let r: number = 1;
  for (const base of bases) {
    const e = d[base];
    r *= (s1[base].coeff / s2[base].coeff) ** e;
  }
  return r;
}
function addR(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // require(equal(q1.dimension, q2.dimension));
  // require(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value + q2.value,
    dimension: q1.dimension,
    unitSystem: q1.unitSystem,
  };
}
function subR(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // require(equal(q1.dimension, q2.dimension))
  // require(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value - q2.value,
    dimension: q1.dimension,
    unitSystem: q1.unitSystem,
  };
}
function mulR(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // require(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value * q2.value,
    dimension: mulDR(q1.dimension, q2.dimension),
    unitSystem: q1.unitSystem,
  };
}
function divR(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // require(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value / q2.value,
    dimension: divDR(q1.dimension, q2.dimension),
    unitSystem: q1.unitSystem,
  };
}
function convR(q: QuantityRepr, s: UnitSystemRepr): QuantityRepr {
  return {
    value: q.value * ratioR(q.dimension, q.unitSystem, s),
    dimension: q.dimension,
    unitSystem: s,
  };
}

export type Dimension<D extends DimensionT> = Readonly<{
  repr: DimensionRepr;
  $type: (x: D) => D;
}>;
export type UnitSystem<S extends UnitSystemT> = Readonly<{
  repr: UnitSystemRepr;
  $type: (x: S) => S;
}>;
export type Quantity<Q extends QuantityT> = Readonly<{
  repr: QuantityRepr;
  $type: (x: Q) => Q;
}>;

const id = <T>(x: T): T => x;

export function dimension<D extends DimensionT>(repr: DimensionRepr): Dimension<D> {
  return { repr, $type: id };
}
export function unitSystem<S extends UnitSystemT>(repr: UnitSystemRepr): UnitSystem<S> {
  return { repr, $type: id };
}
export function quantity<Q extends QuantityT>(repr: QuantityRepr): Quantity<Q> {
  return { repr, $type: id };
}

export const oneD = dimension<OneT>({ M: 0, L: 0, T: 0 });
export const massD = dimension<MassT>({ M: 1, L: 0, T: 0 });
export const lengthD = dimension<LengthT>({ M: 0, L: 1, T: 0 });
export const timeD = dimension<TimeT>({ M: 0, L: 0, T: 1 });

export type Qty<D extends DimensionT, S extends UnitSystemT> = Quantity<MkQuantityT<D, S>>;

export function qty<D extends DimensionT, S extends UnitSystemT>(
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

export function num<S extends UnitSystemT>(value: number, unitSystem: UnitSystem<S>): Qty<OneT, S> {
  return qty(value, oneD, unitSystem);
}
export function mass<S extends UnitSystemT>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<MassT, S> {
  return qty(value, massD, unitSystem);
}
export function length<S extends UnitSystemT>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<LengthT, S> {
  return qty(value, lengthD, unitSystem);
}
export function time<S extends UnitSystemT>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<TimeT, S> {
  return qty(value, timeD, unitSystem);
}

export function add<D extends DimensionT, S extends UnitSystemT>(
  q1: Qty<D, S>,
  q2: Qty<D, S>
): Qty<D, S> {
  return quantity(addR(q1.repr, q2.repr));
}
export function sub<D extends DimensionT, S extends UnitSystemT>(
  q1: Qty<D, S>,
  q2: Qty<D, S>
): Qty<D, S> {
  return quantity(subR(q1.repr, q2.repr));
}
export function mul<D1 extends DimensionT, D2 extends DimensionT, S extends UnitSystemT>(
  q1: Qty<D1, S>,
  q2: Qty<D2, S>
): Qty<MulDT<D1, D2>, S> {
  return quantity(mulR(q1.repr, q2.repr));
}
export function div<D1 extends DimensionT, D2 extends DimensionT, S extends UnitSystemT>(
  q1: Qty<D1, S>,
  q2: Qty<D2, S>
): Qty<DivDT<D1, D2>, S> {
  return quantity(divR(q1.repr, q2.repr));
}
export function conv<D extends DimensionT, S1 extends UnitSystemT, S2 extends UnitSystemT>(
  q: Qty<D, S1>,
  toUnitSystem: UnitSystem<S2>
): Qty<D, S2> {
  return quantity(convR(q.repr, toUnitSystem.repr));
}
