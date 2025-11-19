import { windDirection } from "../../app/utils/weather/wind";

describe("windDirection", () => {
  it("devuelve N cuando el grado está entre 337 y 23", () => {
    expect(windDirection(0)).toBe("N");
    expect(windDirection(10)).toBe("N");
    expect(windDirection(350)).toBe("N");
  });

  it("devuelve NE cuando el grado está entre 23 y 68", () => {
    expect(windDirection(23)).toBe("NE");
    expect(windDirection(50)).toBe("NE");
    expect(windDirection(67)).toBe("NE");
  });

  it("devuelve E cuando el grado está entre 68 y 113", () => {
    expect(windDirection(68)).toBe("E");
    expect(windDirection(90)).toBe("E");
    expect(windDirection(112)).toBe("E");
  });

  it("devuelve SE cuando el grado está entre 113 y 158", () => {
    expect(windDirection(113)).toBe("SE");
    expect(windDirection(135)).toBe("SE");
    expect(windDirection(157)).toBe("SE");
  });

  it("devuelve S cuando el grado está entre 158 y 203", () => {
    expect(windDirection(158)).toBe("S");
    expect(windDirection(180)).toBe("S");
    expect(windDirection(202)).toBe("S");
  });

  it("devuelve SO cuando el grado está entre 203 y 248", () => {
    expect(windDirection(203)).toBe("SO");
    expect(windDirection(225)).toBe("SO");
    expect(windDirection(247)).toBe("SO");
  });

  it("devuelve O cuando el grado está entre 248 y 293", () => {
    expect(windDirection(248)).toBe("O");
    expect(windDirection(270)).toBe("O");
    expect(windDirection(292)).toBe("O");
  });

  it("devuelve NO cuando el grado está entre 293 y 337", () => {
    expect(windDirection(293)).toBe("NO");
    expect(windDirection(315)).toBe("NO");
    expect(windDirection(336)).toBe("NO");
  });

  it("devuelve '?' cuando el valor no es un número válido", () => {
    expect(windDirection(NaN)).toBe("?");
  });
});
