import { MkUnitSystem } from "../unitSystem";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// UnitSystem

export type Test_UnitSystem = Assert<Equal<MkUnitSystem<"MKS">, { name: "MKS" }>>;
