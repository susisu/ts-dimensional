import { Mass, Length } from "../dimension";
import { mass, length, MKS, CGS, mks, cgs, add, sub, mul, div } from "../container";

const m1 = mass(42, mks);
const m2 = mass(42, cgs);

const l1 = length(42, mks);
const l2 = length(42, cgs);

/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-expect-error
add(m1, m2);
// @ts-expect-error
add<Mass, MKS | CGS>(m1, m2);
// @ts-expect-error
add(m1, l1);
// @ts-expect-error
add<Mass | Length, MKS>(m1, l1);

// @ts-expect-error
sub(m1, m2);
// @ts-expect-error
sub<Mass, MKS | CGS>(m1, m2);
// @ts-expect-error
sub(m1, l1);
// @ts-expect-error
sub<Mass | Length, MKS>(m1, l1);

// @ts-expect-error
mul(m1, m2);
// @ts-expect-error
mul<Mass, Mass, MKS | CGS>(m1, m2);
// @ts-expect-error
mul(m1, l2);
// @ts-expect-error
mul<Mass, Length, MKS | CGS>(m1, l2);

// @ts-expect-error
div(m1, m2);
// @ts-expect-error
div<Mass, Mass, MKS | CGS>(m1, m2);
// @ts-expect-error
div(m1, l2);
// @ts-expect-error
div<Mass, Length, MKS | CGS>(m1, l2);
