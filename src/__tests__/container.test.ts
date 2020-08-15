import {
  dimension,
  unitSystem,
  quantity,
  qty,
  oneD,
  massD,
  lengthD,
  timeD,
  mulD,
  divD,
  MKS,
  mks,
  cgs,
  num,
  mass,
  length,
  time,
  add,
  sub,
  mul,
  div,
  conv,
} from "../container";
import { Int } from "../integer";
import { MkDimension, Mass } from "../dimension";
import { MkUnitSystem } from "../unitSystem";
import { MkQuantity } from "../quantity";
import { DimensionRepr, UnitSystemRepr, QuantityRepr } from "../repr";

describe("container", () => {
  describe("dimension", () => {
    it("should create a value representing a dimension", () => {
      type Energy = MkDimension<{ M: Int[1]; L: Int[2]; T: Int[-2] }>;
      const energyRepr: DimensionRepr = { M: 1, L: 2, T: -2 };
      const energyD = dimension<Energy>(energyRepr);
      expect(energyD.repr).toEqual<DimensionRepr>(energyRepr);
    });
  });

  describe("unitSystem", () => {
    it("should create a value representing a unit system", () => {
      type FPS = MkUnitSystem<"FPS">;
      const fpsRepr: UnitSystemRepr = {
        M: { symbol: "lb", coeff: 0.45359237 },
        L: { symbol: "ft", coeff: 0.3048 },
        T: { symbol: "s", coeff: 1 },
      };
      const fps = unitSystem<FPS>(fpsRepr);
      expect(fps.repr).toEqual<UnitSystemRepr>(fpsRepr);
    });
  });

  describe("quantity", () => {
    it("should create a value representing a quantity", () => {
      const repr: QuantityRepr = {
        value: 42,
        dimension: massD.repr,
        unitSystem: mks.repr,
      };
      const q = quantity<MkQuantity<Mass, MKS>>(repr);
      expect(q.repr).toEqual<QuantityRepr>(repr);
    });
  });

  describe("qty", () => {
    it("should create a value representing a quantity", () => {
      const q = qty<Mass, MKS>(42, massD, mks);
      expect(q.repr).toEqual<QuantityRepr>({
        value: 42,
        dimension: massD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("mulD", () => {
    it("should multiply dimensions", () => {
      type D1 = MkDimension<{ M: Int[1]; L: Int[1]; T: Int[0] }>;
      type D2 = MkDimension<{ M: Int[0]; L: Int[1]; T: Int[-2] }>;
      const d1 = dimension<D1>({ M: 1, L: 1, T: 0 });
      const d2 = dimension<D2>({ M: 0, L: 1, T: -2 });
      const d3 = mulD(d1, d2);
      expect(d3.repr).toEqual<DimensionRepr>({ M: 1, L: 2, T: -2 });
    });
  });

  describe("divD", () => {
    it("should divide a dimension by another", () => {
      type D1 = MkDimension<{ M: Int[1]; L: Int[1]; T: Int[0] }>;
      type D2 = MkDimension<{ M: Int[0]; L: Int[1]; T: Int[-2] }>;
      const d1 = dimension<D1>({ M: 1, L: 1, T: 0 });
      const d2 = dimension<D2>({ M: 0, L: 1, T: -2 });
      const d3 = divD(d1, d2);
      expect(d3.repr).toEqual<DimensionRepr>({ M: 1, L: 0, T: 2 });
    });
  });

  describe("num", () => {
    it("should create a dimensionless number", () => {
      const x = num(42, mks);
      expect(x.repr).toEqual<QuantityRepr>({
        value: 42,
        dimension: oneD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("mass", () => {
    it("should create a mass", () => {
      const m = mass(42, mks);
      expect(m.repr).toEqual<QuantityRepr>({
        value: 42,
        dimension: massD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("length", () => {
    it("should create a length", () => {
      const l = length(42, mks);
      expect(l.repr).toEqual<QuantityRepr>({
        value: 42,
        dimension: lengthD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("time", () => {
    it("should create a time", () => {
      const t = time(42, mks);
      expect(t.repr).toEqual<QuantityRepr>({
        value: 42,
        dimension: timeD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("add", () => {
    it("should add two values with equal dimension and unit system", () => {
      const m1 = mass(5, mks);
      const m2 = mass(2, mks);
      const m3 = add(m1, m2);
      expect(m3.repr).toEqual<QuantityRepr>({
        value: 7,
        dimension: massD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("sub", () => {
    it("should subtract a value from another with equal dimension and unit system", () => {
      const m1 = mass(5, mks);
      const m2 = mass(2, mks);
      const m3 = sub(m1, m2);
      expect(m3.repr).toEqual<QuantityRepr>({
        value: 3,
        dimension: massD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("mul", () => {
    it("should multiply values with equal unit system", () => {
      const m = mass(5, mks);
      const l = length(2, mks);
      const x = mul(m, l);
      expect(x.repr).toEqual<QuantityRepr>({
        value: 10,
        dimension: { M: 1, L: 1, T: 0 },
        unitSystem: mks.repr,
      });
    });
  });

  describe("div", () => {
    it("should divide a value by another with equal unit system", () => {
      const m = mass(5, mks);
      const l = length(2, mks);
      const x = div(m, l);
      expect(x.repr).toEqual<QuantityRepr>({
        value: 2.5,
        dimension: { M: 1, L: -1, T: 0 },
        unitSystem: mks.repr,
      });
    });
  });

  describe("conv", () => {
    it("should convert a value to one measured in another unit system", () => {
      const m1 = mass(42, mks);
      const m2 = conv(m1, cgs);
      expect(m2.repr).toEqual<QuantityRepr>({
        value: 42000,
        dimension: massD.repr,
        unitSystem: cgs.repr,
      });
    });
  });
});
