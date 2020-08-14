import {
  DimensionKind,
  One as OneD,
  Mass as MassD,
  Length as LengthD,
  Time as TimeD,
  Mul as MulD,
  Div as DivD,
} from "./dimension";
import { UnitSystemKind, MkUnitSystem } from "./unitSystem";
import { QuantityKind, MkQuantity } from "./quantity";
import {
  DimensionRepr,
  UnitSystemRepr,
  QuantityRepr,
  mulD as mulDRepr,
  divD as divDRepr,
  add as addRepr,
  sub as subRepr,
  mul as mulRepr,
  div as divRepr,
  conv as convRepr,
} from "./repr";

// containers

type Type<T> = (x: T) => T;

export type Dimension<D extends DimensionKind> = Readonly<{
  __type__: Type<D>;
  repr: DimensionRepr;
}>;

export type UnitSystem<S extends UnitSystemKind> = Readonly<{
  __type__: Type<S>;
  repr: UnitSystemRepr;
}>;

export type Quantity<Q extends QuantityKind> = Readonly<{
  __type__: Type<Q>;
  repr: QuantityRepr;
}>;

const id = <T>(x: T): T => x;

export function dimension<D extends DimensionKind>(repr: DimensionRepr): Dimension<D> {
  return { __type__: id, repr };
}

export function unitSystem<S extends UnitSystemKind>(repr: UnitSystemRepr): UnitSystem<S> {
  return { __type__: id, repr };
}

export function quantity<Q extends QuantityKind>(repr: QuantityRepr): Quantity<Q> {
  return { __type__: id, repr };
}

export type Qty<D extends DimensionKind, S extends UnitSystemKind> = Quantity<MkQuantity<D, S>>;

export function qty<D extends DimensionKind, S extends UnitSystemKind>(
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

// dimensions

export const oneD = dimension<OneD>({ M: 0, L: 0, T: 0 });
export const massD = dimension<MassD>({ M: 1, L: 0, T: 0 });
export const lengthD = dimension<LengthD>({ M: 0, L: 1, T: 0 });
export const timeD = dimension<TimeD>({ M: 0, L: 0, T: 1 });

export function mulD<D1 extends DimensionKind, D2 extends DimensionKind>(
  d1: Dimension<D1>,
  d2: Dimension<D2>
): Dimension<MulD<D1, D2>> {
  return dimension(mulDRepr(d1.repr, d2.repr));
}

export function divD<D1 extends DimensionKind, D2 extends DimensionKind>(
  d1: Dimension<D1>,
  d2: Dimension<D2>
): Dimension<DivD<D1, D2>> {
  return dimension(divDRepr(d1.repr, d2.repr));
}

// unit systems

export type MKS = MkUnitSystem<"MKS">;
export type CGS = MkUnitSystem<"CGS">;

export const mks = unitSystem<MKS>({
  M: { name: "kilogram", coeff: 1 },
  L: { name: "meter", coeff: 1 },
  T: { name: "second", coeff: 1 },
});
export const cgs = unitSystem<CGS>({
  M: { name: "gram", coeff: 1e-3 },
  L: { name: "centimeter", coeff: 1e-2 },
  T: { name: "second", coeff: 1 },
});

// basic quantity constructors

export function num<S extends UnitSystemKind>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<OneD, S> {
  return qty(value, oneD, unitSystem);
}

export function mass<S extends UnitSystemKind>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<MassD, S> {
  return qty(value, massD, unitSystem);
}

export function length<S extends UnitSystemKind>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<LengthD, S> {
  return qty(value, lengthD, unitSystem);
}

export function time<S extends UnitSystemKind>(
  value: number,
  unitSystem: UnitSystem<S>
): Qty<TimeD, S> {
  return qty(value, timeD, unitSystem);
}

// operations

export function add<D extends DimensionKind, S extends UnitSystemKind>(
  q1: Qty<D, S>,
  q2: Qty<D, S>
): Qty<D, S> {
  return quantity(addRepr(q1.repr, q2.repr));
}

export function sub<D extends DimensionKind, S extends UnitSystemKind>(
  q1: Qty<D, S>,
  q2: Qty<D, S>
): Qty<D, S> {
  return quantity(subRepr(q1.repr, q2.repr));
}

export function mul<D1 extends DimensionKind, D2 extends DimensionKind, S extends UnitSystemKind>(
  q1: Qty<D1, S>,
  q2: Qty<D2, S>
): Qty<MulD<D1, D2>, S> {
  return quantity(mulRepr(q1.repr, q2.repr));
}

export function div<D1 extends DimensionKind, D2 extends DimensionKind, S extends UnitSystemKind>(
  q1: Qty<D1, S>,
  q2: Qty<D2, S>
): Qty<DivD<D1, D2>, S> {
  return quantity(divRepr(q1.repr, q2.repr));
}

export function conv<D extends DimensionKind, S1 extends UnitSystemKind, S2 extends UnitSystemKind>(
  q: Qty<D, S1>,
  toUnitSystem: UnitSystem<S2>
): Qty<D, S2> {
  return quantity(convRepr(q.repr, toUnitSystem.repr));
}
