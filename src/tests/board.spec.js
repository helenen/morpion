import {
    generateBoard,
} from "../scripts/game2";


describe("Should have a morpion grid", () => {
    const res = generateBoard();

    test("should return a gameboard of 3 rows", () => {
        expect(res.length).toEqual(3);
    });

    test("should return an empty gameboard of 3 column * 3 row", () => {
        expect(res).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
});
