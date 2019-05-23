import {
  aiPlayAPawn
} from "./index";

describe("aiPlaceAPawn method", () => {
  test("should play a pawn in the middle of the board", () => {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];

    expect(aiPlayAPawn(board, "O", () => 0.5, () => 0.5)).toEqual([
      ["", "", ""],
      ["", "O", ""],
      ["", "", ""]
    ]);
  });

  test("should play a pawn on the first row, second column", () => {
    const board = [["X", "", ""], ["", "", ""], ["", "", ""]];
    expect(aiPlayAPawn(board, "O", () => 0, () => 0.5)).toEqual([
      ["X", "O", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  });

  test("AI don't place a pawn on other pawn", () => {
    const board = [["X", "", ""], ["", "", ""], ["", "", ""]];
    expect(aiPlayAPawn(board, "O", () => 0.8, () => 0.5)).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "O", ""]
    ]);
  });
});
