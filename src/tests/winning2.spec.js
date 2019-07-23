import {
    winningGame,
    winningHorizonal,
    winningDiagonal,
    winningVertical,
} from "../scripts/winning2";

describe("wining", () => {
    describe("winningHorizontal", () => {
        test("should win a party with 3 X pawns line up horizontal way", () => {
            const board = [["X", "X", "X"], ["", "", ""], ["", "", ""]];
            expect(winningHorizonal(board, "X")).toEqual(true);
        });
    })

    describe("winningDiagonal", () => {
        test("should win a party with 3 O pawns line up diagonal way", () => {
            const board = [["O", "", ""], ["", "O", ""], ["", "", "O"]];
            expect(winningDiagonal(board, "O")).toEqual(true);
        });

        test("should win a party with 3 O pawns line up diagonal way", () => {
            const board = [["", "", "O"], ["", "O", ""], ["O", "", ""]];
            expect(winningDiagonal(board, "O")).toEqual(true);
        });
    })

    describe("winnigVertical", () => {
        test("should win a party with 3 X pawns line up vertical way", () => {
            const board = [["", "", "X"], ["", "", "X"], ["", "", "X"]];
            expect(winningVertical(board, "X")).toEqual(true);
        });

        test("should win a party with 3 X pawns line up vertical way", () => {
            const board = [["X", "", ""], ["X", "", ""], ["X", "", ""]];
            expect(winningVertical(board, "X")).toEqual(true);
        });
    })

    describe('winnigGame', () => {
        test("win sentence", () => {
            const board = [["X", "", ""], ["", "X", ""], ["X", "", ""]];
            expect(winningGame(board, "X")).toEqual(null);
        });

        test("win sentence", () => {
            const board = [["O", "", ""], ["", "O", ""], ["", "", "O"]];
            expect(winningGame(board, "O")).toEqual("O");
        });

        test("should return null when no player is winning", () => {
            const board = [["X", "X", "O"], ["O", "O", "X"], ["X", "X", "O"]];
            expect(winningGame(board, "X")).toEqual(null);
        })
    })
});
