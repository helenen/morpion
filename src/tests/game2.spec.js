import { aiPlayPawn } from "../scripts/game2";


describe("aiPlaceAPawn method", () => {
    test("should play a pawn in the middle of the board", () => {
        const board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        expect(aiPlayPawn(board, 2, () => 0.5, () => 0.5)).toEqual([
            [0, 0, 0],
            [0, 2, 0],
            [0, 0, 0]
        ]);
    });



    test("should play a pawn on the first row, second column", () => {
        const board = [["X", "", ""], ["", "", ""], ["", "", ""]];
        expect(aiPlayPawn(board, 2, () => 0, () => 0.5)).toEqual([
            [1, 2, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]);
    });

    test("AI don't place a pawn on other pawn", () => {
        const board = [["X", "", ""], ["", "", ""], ["", "", ""]];
        expect(aiPlayPawn(board, 2, () => 0.8, () => 0.5)).toEqual([
            [1, 0, 0],
            [0, 0, 0],
            [0, 2, 0]
        ]);
    });
});

