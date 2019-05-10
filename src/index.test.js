import {
  generateBoard,
  playAPawn,
  winningGame,
  winningHorizonal,
  winningDiagonal,
  winningVertical,
  aiPlayAPawn
} from "./index";

describe("Should have a morpion grid", () => {
  const res = generateBoard();
  test("should return a gameboard of 3 rows", () => {
    expect(res.length).toEqual(3);
  });
  test("should return an empty gameboard of 3 column * 3 row", () => {
    expect(res).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
});
describe("Should play a pawn", () => {
  const board = generateBoard();

  test("should return board modified with playerOne", () => {
    expect(playAPawn(board, 0, 0, true)).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  });
  test("should return board modified with playerTwo", () => {
    expect(playAPawn(board, 1, 0, false)).toEqual([
      ["X", "", ""],
      ["O", "", ""],
      ["", "", ""]
    ]);
  });
  test("should don't modify a pawn already played", () => {
    expect(playAPawn(board, 1, 0, true)).toEqual([
      ["X", "", ""],
      ["O", "", ""],
      ["", "", ""]
    ]);
  });
});
describe("should win a party with 3 same pawns line up different ways", () => {
  test("should win a party with 3 X pawns line up horizontal way", () => {
    const board = [["X", "X", "X"], ["", "", ""], ["", "", ""]];
    expect(winningHorizonal(board, "X")).toEqual(true);
  });
  test("should win a party with 3 O pawns line up diagonal way", () => {
    const board = [["O", "", ""], ["", "O", ""], ["", "", "O"]];
    expect(winningDiagonal(board, "O")).toEqual(true);
  });
  test("should win a party with 3 O pawns line up diagonal way", () => {
    const board = [["", "", "O"], ["", "O", ""], ["O", "", "="]];
    expect(winningDiagonal(board, "O")).toEqual(true);
  });
  test("should win a party with 3 X pawns line up vertical way", () => {
    const board = [["", "", "X"], ["", "", "X"], ["", "", "X"]];
    expect(winningVertical(board, "X")).toEqual(true);
  });
  test("should win a party with 3 X pawns line up vertical way", () => {
    const board = [["X", "", ""], ["", "X", ""], ["X", "", ""]];
    expect(winningVertical(board, "X")).toEqual(false);
  });
  test("win sentence", () => {
    const board = [["X", "", ""], ["", "X", ""], ["X", "", ""]];
    expect(winningGame(board, "X")).toEqual("Tu as perdu X");
  });
  test("win sentence", () => {
    const board = [["O", "", ""], ["", "O", ""], ["", "", "O"]];
    expect(winningGame(board, "O")).toEqual("Tu as gagné O");
  });
});
describe("AI place a pawn", () => {
  test("AI place a pawn", () => {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];
    expect(aiPlayAPawn(board, "O", () => 0.5)).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", "O"]
    ]);
  });
});
