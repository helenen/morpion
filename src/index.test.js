import { generateCell } from "./index";

describe("Should have a morpion grid", () => {
  test("should have a cell", () => {
    let grid = ['<input type="text"/>'];
    expect(generateCell(grid)).toHaveLength(1);
  });
  test("should have a grid", () => {
    let grid = [
      '<input type="text"/>',
      '<input type="text"/>',
      '<input type="text"/>',
      '<input type="text"/>',
      '<input type="text"/>',
      '<input type="text"/>',
      '<input type="text"/>',
      '<input type="text"/>',
      '<input type="text"/>'
    ];
    expect(generateCell(grid)).toHaveLength(9);
  });
});
