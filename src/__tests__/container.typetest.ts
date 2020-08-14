import { UnitSystem as UnitSystemT } from "../unitSystem";
import { unitSystem, mass, length, add, sub, mul, div } from "../container";

type MksT = UnitSystemT<"MKS">;
type CgsT = UnitSystemT<"CGS">;

const mksRepr = {
  M: { name: "kilogram", coeff: 1 },
  L: { name: "meter", coeff: 1 },
  T: { name: "second", coeff: 1 },
};
const cgsRepr = {
  M: { name: "gram", coeff: 1 },
  L: { name: "centimeter", coeff: 1 },
  T: { name: "second", coeff: 1 },
};

const mks = unitSystem<MksT>(mksRepr);
const cgs = unitSystem<CgsT>(cgsRepr);

const m1 = mass(42, mks);
const m2 = mass(42, cgs);

const l1 = length(42, mks);
const l2 = length(42, cgs);

/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-expect-error
add(m1, m2);
// @ts-expect-error
add(m1, l1);

// @ts-expect-error
sub(m1, m2);
// @ts-expect-error
sub(m1, l1);

// @ts-expect-error
mul(m1, m2);
// @ts-expect-error
mul(m1, l2);

// @ts-expect-error
div(m1, m2);
// @ts-expect-error
div(m1, l2);
