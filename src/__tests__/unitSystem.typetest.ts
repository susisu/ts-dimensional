import { MkUnitSystem } from "../unitSystem";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

// MkUnitSystem

export type Test_MkUnitSystem = Assert<Equal<MkUnitSystem<{ M: "m", L: "l", T: "t" }>, { M: "m", L: "l", T: "t" }>>;
