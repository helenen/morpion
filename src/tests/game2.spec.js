import { aiPlayPawn } from "../scripts/game2";


describe("aiPlaceAPawn method", () => {
    test("should play a pawn in the middle of the board", () => {
        const board = [[null, null, null], [null, null, null], [null, null, null]];

        const mockRandom = () => {
            return 0.5;
        }

        expect(aiPlayPawn(board, 'O', mockRandom)).toEqual([
            [null, null, null],
            [null, 'O', null],
            [null, null, null]
        ]);
    });



    test("should play a pawn on the first availaible positon", () => {
        const board = [['X', null, null], [null, null, null], [null, null, null]];
        const mockRandom = () => {
            return 0;
        }

        expect(aiPlayPawn(board, 'O', mockRandom)).toEqual([
            ['X', 'O', null],
            [null, null, null],
            [null, null, null]
        ]);
    });

    test("AI don't place a pawn on other pawn", () => {
        const board = [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']];
        expect(() => aiPlayPawn(board)).toThrow()
    });
});

