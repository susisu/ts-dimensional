import { MkQuantity } from "../quantity";
import { Mass } from "../dimension";
import { Mks } from "../unitSystem";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// MkUnitSystem

export type Test_MkQuantity = Assert<Equal<MkQuantity<Mass, Mks>, { dimension: Mass, unitSystem: Mks }>>;
