import {
    generateBoard,
    playPawn,
} from "../scripts/game2";


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
    test("should return a error message when a player try to play on pawn played", () => {
        const playedBoardTwo = [
            ["X", "", ""],
            ["O", "", ""],
            ["", "", ""]
        ];
        expect(playPawn(playedBoardTwo, 1, 0, "X")).toEqual([
            ["X", "", ""],
            ["O", "", ""],
            ["", "", ""]
        ]) && expect(playPawn(playedBoardTwo, 1, 0, "X")).toEqual("error: can't play when a pawn is already played");

    })
});
