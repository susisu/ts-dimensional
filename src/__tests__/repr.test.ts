import {
  DimensionRepr,
  UnitSystemRepr,
  QuantityRepr,
  mulD,
  divD,
  add,
  sub,
  mul,
  div,
  conv,
} from "../repr";

describe("repr", () => {
  describe("mulD", () => {
    it("should multiply two dimension representations", () => {
      const d1: DimensionRepr = { M: 1, L: 1, T: 0 };
      const d2: DimensionRepr = { M: 0, L: 1, T: -2 };
      expect(mulD(d1, d2)).toEqual({ M: 1, L: 2, T: -2 });
    });
  });

  describe("divD", () => {
    it("should divide a dimension representation by another", () => {
      const d1: DimensionRepr = { M: 1, L: 1, T: 0 };
      const d2: DimensionRepr = { M: 0, L: 1, T: -2 };
      expect(divD(d1, d2)).toEqual({ M: 1, L: 0, T: 2 });
    });
  });

  const mass: DimensionRepr = { M: 1, L: 0, T: 0 };
  const length: DimensionRepr = { M: 0, L: 1, T: 0 };
  const mks: UnitSystemRepr = {
    M: { symbol: "kg", factor: 1 },
    L: { symbol: "m", factor: 1 },
    T: { symbol: "s", factor: 1 },
  };
  const cgs: UnitSystemRepr = {
    M: { symbol: "g", factor: 1e-3 },
    L: { symbol: "cm", factor: 1e-2 },
    T: { symbol: "s", factor: 1 },
  };

  describe("add", () => {
    it("should add two quantity representations", () => {
      const m1: QuantityRepr = { value: 5, dimension: mass, unitSystem: mks };
      const m2: QuantityRepr = { value: 2, dimension: mass, unitSystem: mks };
      expect(add(m1, m2)).toEqual<QuantityRepr>({
        value: 7,
        dimension: mass,
        unitSystem: mks,
      });
    });
  });

  describe("sub", () => {
    it("should subtract a quantity representation from another", () => {
      const m1: QuantityRepr = { value: 5, dimension: mass, unitSystem: mks };
      const m2: QuantityRepr = { value: 2, dimension: mass, unitSystem: mks };
      expect(sub(m1, m2)).toEqual<QuantityRepr>({
        value: 3,
        dimension: mass,
        unitSystem: mks,
      });
    });
  });

  describe("mul", () => {
    it("should multiply two quantity representations", () => {
      const m: QuantityRepr = { value: 5, dimension: mass, unitSystem: mks };
      const l: QuantityRepr = { value: 2, dimension: length, unitSystem: mks };
      expect(mul(m, l)).toEqual<QuantityRepr>({
        value: 10,
        dimension: { M: 1, L: 1, T: 0 },
        unitSystem: mks,
      });
    });
  });

  describe("div", () => {
    it("should divide a quantity representation by another", () => {
      const m: QuantityRepr = { value: 5, dimension: mass, unitSystem: mks };
      const l: QuantityRepr = { value: 2, dimension: length, unitSystem: mks };
      expect(div(m, l)).toEqual<QuantityRepr>({
        value: 2.5,
        dimension: { M: 1, L: -1, T: 0 },
        unitSystem: mks,
      });
    });
  });

  describe("conv", () => {
    it("should convert a quantity representation to one measured in another unit system", () => {
      const m: QuantityRepr = { value: 42, dimension: mass, unitSystem: mks };
      expect(conv(m, cgs)).toEqual<QuantityRepr>({
        value: 42000,
        dimension: mass,
        unitSystem: cgs,
      });
    });
  });
});
