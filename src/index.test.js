import { generateBoard } from "./index";

describe("Should have a morpion grid", () => {
  test("should return array of arrays", () => {
    let res = generateBoard();
    expect(res).toEqual(res);
  });
  test("should return a array of size 2 ", () => {
    let res = generateBoard();
    expect(res.length).toEqual(2);
  });
  test("should return array of arrays with values to type null ", () => {
    let res = generateBoard();
    expect(res).toEqual(
      [
        ['<input type="text" value="null"/>','<input type="text" value="null"/>','<input type="text" value="null"/>'],
        ['<input type="text" value="null"/>','<input type="text" value="null"/>','<input type="text" value="null"/>'],
        ['<input type="text" value="null"/>','<input type="text" value="null"/>','<input type="text" value="null"/>'],
    ]);
  });
});
