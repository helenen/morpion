import { generateBoard, playAPawn } from "./index";

describe("Should have a morpion grid", () => {
  test("should return a gameboard of 3 column", () => {
    const res = generateBoard();
    expect(res.length).toEqual(3);
  });
  test("should return an empty gameboard of 3 column * 3 row", () => {
    const res = generateBoard();
    expect(res).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
});
describe("Should play a pawn", () => {
  test("should return board modified", () => {
    const board = generateBoard();
    playAPawn(board, row, column, gamerOne);
    console.log("pilou", playAPawn());
    expect(playAPawn(board, 0, 0, "X")).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  });
  // test("should return value's element", () => {
  //   const res = playAPawn();
  //   expect(res).toEqual(
  //   [
  //     ['x', '', ''],
  //     ['x', '', ''],
  //     ['x', '', '']
  //   ]);
  // });
});
