import { generateBoard } from "./index";

describe("Should have a morpion grid", () => {
  test("should return a gameboard of 3 column", () => {
    let res = generateBoard();
    expect(res.length).toEqual(3);
  });
  test("should return an empty gameboard of 3 column * 3 row", () => {
    let res = generateBoard();
    expect(res).toEqual(
      [
        [null,null, null],
        [null,null, null],
        [null,null, null]
    ]);
  });
});
