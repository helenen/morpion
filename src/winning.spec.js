import {
    winningGame,
    winningHorizonal,
    winningDiagonal,
    winningVertical,
} from "./game";

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
