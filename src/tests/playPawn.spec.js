import {
    generateBoard,
    playPawn,
} from "../scripts/game";


describe("Should play a pawn", () => {
    let board = [];
    beforeEach(() => {
        board = generateBoard();
    })

    test("should return board modified with player", () => {
        expect(playPawn(board, 0, 0, "X")).toEqual([
            ["X", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
    });

    test("should return board modified with playerTwo", () => {

        expect(playPawn(board, 1, 0, "O")).toEqual([
            ["", "", ""],
            ["O", "", ""],
            ["", "", ""]
        ]);
    });

    test("shouldn't modify a pawn already played", () => {
        const playedBoard = [
            ["X", "", ""],
            ["O", "", ""],
            ["", "", ""]
        ];
        expect(playPawn(playedBoard, 1, 0, "X")).toEqual([
            ["X", "", ""],
            ["O", "", ""],
            ["", "", ""]
        ]);
    });
});
