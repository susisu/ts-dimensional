import { MkQuantity } from "../quantity";
import { Mass } from "../dimension";
import { UnitSystem } from "../unitSystem";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

type Mks = UnitSystem<"MKS">;

// MkUnitSystem

export type Test_MkQuantity = Assert<Equal<MkQuantity<Mass, Mks>, { dimension: Mass, unitSystem: Mks }>>;
