import { generateBoard, playAPawn } from "./index";

describe("Should have a morpion grid", () => {
  const res = generateBoard();
  test("should return a gameboard of 3 rows", () => {
    expect(res.length).toEqual(3);
  });
  test("should return an empty gameboard of 3 column * 3 row", () => {
    expect(res).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
  });
});
describe("Should play a pawn", () => {
  const board = generateBoard();

  test("should return board modified with playerOne", () => {    
    expect(playAPawn(board,0,0,true)).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
  });
  test("should return board modified with playerTwo", () =>{
    expect(playAPawn(board, 1, 0,false)).toEqual([
      ['X', '', ''],
      ['O', '', ''],
      ['', '', '']
    ]);
  });
  test("should don't modify a pawn already played",() => {
    expect(playAPawn(board, 1, 0, true)).toEqual([
      ['X', '', ''],
      ['O', '', ''],
      ['', '', '']
    ]);
  });
  
});
