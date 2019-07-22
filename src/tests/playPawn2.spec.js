import {
    generateBoard,
    playPawn,
} from "../scripts/game2";


describe("Should play a pawn", () => {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    beforeEach(() => {
        board = generateBoard();
    })

    test("should return board modified with player", () => {
        expect(playPawn(board, 0, 1)).toEqual([
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]);
    });

    test("should return board modified with playerTwo", () => {

        expect(playPawn(board, 1, 0, 2)).toEqual([
            [0, 0, 0],
            [2, 0, 0],
            [0, 0, 0]
        ]);
    });

    test("shouldn't modify a pawn already played", () => {
        const playedBoard = [
            [1, 0, 0],
            [2, 0, 0],
            [0, 0, 0]
        ];
        expect(playPawn(playedBoard, 1, 0, 2)).toEqual([
            [1, 0, 0],
            [2, 0, 0],
            [0, 0, 0]
        ]);
    });
    test("should return a error message when a player try to play on pawn played", () => {
        const playedBoardTwo = [
            [1, 0, 0],
            [2, 0, 0],
            [0, 0, 0]
        ];
        expect(playPawn(playedBoardTwo, 1, 0, 1)).toEqual([
            [1, 0, 0],
            [2, 0, 0],
            [0, 0, 0]
        ]) && expect(playPawn(playedBoardTwo, 1, 0, 1)).toEqual("error: can't play when a pawn is already played");

    })
});
