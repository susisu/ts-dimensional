import { Quantity, MkQuantity } from "../quantity";
import { Mass } from "../dimension";
import { MkUnitSystem } from "../unitSystem";
import { Equal, Assert } from "./assert";

/* eslint-disable prettier/prettier */

type Mks = MkUnitSystem<"MKS">;

// Quantity

export type Test_Quantity = Assert<Equal<Quantity<{ dimension: Mass, unitSystem: Mks }>, { dimension: Mass, unitSystem: Mks }>>;


// MkQuantity

export type Test_MkQuantity = Assert<Equal<MkQuantity<Mass, Mks>, { dimension: Mass, unitSystem: Mks }>>;
