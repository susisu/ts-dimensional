import { MkQuantity } from "../quantity";
import { Mass } from "../dimension";
import { MkUnitSystem } from "../unitSystem";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// MkQuantity

type MKS = MkUnitSystem<"MKS">;
export type Test_MkQuantity = Assert<Equal<MkQuantity<Mass, MKS>, { dimension: Mass, unitSystem: MKS }>>;
