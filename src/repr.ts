import { Base, bases } from "./dimension";

export type DimensionRepr = Readonly<{ [B in Base]: number }>;

export type UnitRepr = Readonly<{
  symbol: string;
  factor: number;
}>;
export type UnitSystemRepr = Readonly<{ [B in Base]: UnitRepr }>;

export type QuantityRepr = Readonly<{
  value: number;
  dimension: DimensionRepr;
  unitSystem: UnitSystemRepr;
}>;

export function mulD(d1: DimensionRepr, d2: DimensionRepr): DimensionRepr {
  return Object.fromEntries(bases.map(base => [base, d1[base] + d2[base]])) as DimensionRepr;
}

export function divD(d1: DimensionRepr, d2: DimensionRepr): DimensionRepr {
  return Object.fromEntries(bases.map(base => [base, d1[base] - d2[base]])) as DimensionRepr;
}

export function add(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // assert(equal(q1.dimension, q2.dimension));
  // assert(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value + q2.value,
    dimension: q1.dimension,
    unitSystem: q1.unitSystem,
  };
}

export function sub(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // assert(equal(q1.dimension, q2.dimension))
  // assert(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value - q2.value,
    dimension: q1.dimension,
    unitSystem: q1.unitSystem,
  };
}

export function mul(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // assert(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value * q2.value,
    dimension: mulD(q1.dimension, q2.dimension),
    unitSystem: q1.unitSystem,
  };
}

export function div(q1: QuantityRepr, q2: QuantityRepr): QuantityRepr {
  // assert(equal(q1.unitSystem, q2.unitSystem));
  return {
    value: q1.value / q2.value,
    dimension: divD(q1.dimension, q2.dimension),
    unitSystem: q1.unitSystem,
  };
}

export function conv(q: QuantityRepr, s: UnitSystemRepr): QuantityRepr {
  return {
    value: q.value * convFactor(q.dimension, q.unitSystem, s),
    dimension: q.dimension,
    unitSystem: s,
  };
}

function convFactor(d: DimensionRepr, s1: UnitSystemRepr, s2: UnitSystemRepr): number {
  return bases.reduce((factor, base) => factor * (s1[base].factor / s2[base].factor) ** d[base], 1);
}
