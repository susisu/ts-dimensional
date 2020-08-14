import {
  dimension,
  unitSystem,
  quantity,
  qty,
  oneD,
  massD,
  lengthD,
  timeD,
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

describe("container", () => {
  describe("dimension", () => {
    it("should create a value representing a dimension", () => {
      type Energy = MkDimension<{ M: Int[1]; L: Int[2]; T: Int[-2] }>;
      const energyRepr = { M: 1, L: 2, T: -2 };
      const energyD = dimension<Energy>(energyRepr);
      expect(energyD.repr).toEqual(energyRepr);
    });
  });

  describe("unitSystem", () => {
    it("should create a value representing a unit system", () => {
      type FPS = MkUnitSystem<"FPS">;
      const fpsRepr = {
        M: { name: "pound", coeff: 0.45359237 },
        L: { name: "foot", coeff: 0.3048 },
        T: { name: "second", coeff: 1 },
      };
      const fps = unitSystem<FPS>(fpsRepr);
      expect(fps.repr).toEqual(fpsRepr);
    });
  });

  describe("quantity", () => {
    it("should create a value representing a quantity", () => {
      const repr = {
        value: 42,
        dimension: massD.repr,
        unitSystem: mks.repr,
      };
      const q = quantity<MkQuantity<Mass, MKS>>(repr);
      expect(q.repr).toEqual(repr);
    });
  });

  describe("qty", () => {
    it("should create a value representing a quantity", () => {
      const q = qty<Mass, MKS>(42, massD, mks);
      expect(q.repr).toEqual({
        value: 42,
        dimension: massD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("num", () => {
    it("should create a dimensionless number", () => {
      const x = num(42, mks);
      expect(x.repr).toEqual({
        value: 42,
        dimension: oneD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("mass", () => {
    it("should create a mass", () => {
      const m = mass(42, mks);
      expect(m.repr).toEqual({
        value: 42,
        dimension: massD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("length", () => {
    it("should create a length", () => {
      const l = length(42, mks);
      expect(l.repr).toEqual({
        value: 42,
        dimension: lengthD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("time", () => {
    it("should create a time", () => {
      const t = time(42, mks);
      expect(t.repr).toEqual({
        value: 42,
        dimension: timeD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("add", () => {
    it("should add two values with equal dimension and unit system", () => {
      const m1 = mass(2, mks);
      const m2 = mass(5, mks);
      const m3 = add(m1, m2);
      expect(m3.repr).toEqual({
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
      expect(m3.repr).toEqual({
        value: 3,
        dimension: massD.repr,
        unitSystem: mks.repr,
      });
    });
  });

  describe("mul", () => {
    it("should multiply values with equal unit system", () => {
      const m = mass(2, mks);
      const l = length(5, mks);
      const x = mul(m, l);
      expect(x.repr).toEqual({
        value: 10,
        dimension: { M: 1, L: 1, T: 0 },
        unitSystem: mks.repr,
      });
    });
  });

  describe("div", () => {
    it("should divide a value with another with equal unit system", () => {
      const m = mass(5, mks);
      const l = length(2, mks);
      const x = div(m, l);
      expect(x.repr).toEqual({
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
      expect(m2.repr).toEqual({
        value: 42000,
        dimension: massD.repr,
        unitSystem: cgs.repr,
      });
    });
  });
});
