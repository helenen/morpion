import { generateBoard, playAPawn} from "./index";

describe("Should have a morpion grid", () => {
  test("should return a gameboard of 3 column", () => {
    const res = generateBoard();
    expect(res.length).toEqual(3);
  });
  test("should return an empty gameboard of 3 column * 3 row", () => {
    const res = generateBoard();
    expect(res).toEqual(
      [
        ['','', ''],
        ['','', ''],
        ['','', '']
    ]);
  });
});
describe("Should play a pawn", () => {
  test("should return board modified", () => {
    const grid = generateBoard();
    const res = playAPawn(grid);
    
    expect(res).toEqual(
      [
        ['x','', ''],
        ['', '', ''],
        ['', '', '']
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
