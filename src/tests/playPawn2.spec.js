import {
    generateBoard,
    playPawn,
} from "../scripts/game2";


describe("Should play a pawn", () => {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    beforeEach(() => {
        board = generateBoard();
    })

    test("should return board modified with player", () => {
        expect(playPawn(board, 0, 0, 'X')).toEqual([
            ['X', null, null],
            [null, null, null],
            [null, null, null]
        ]);
    });

    test("should return board modified with playerTwo", () => {

        expect(playPawn(board, 1, 0, 'X')).toEqual([
            [null, null, null],
            ['X', null, null],
            [null, null, null]
        ]);
    });

    test("shouldn't modify a pawn already played", () => {
        const playedBoard = [
            ['X', null, null],
            ['O', null, null],
            [null, null, null]
        ];
        expect(() => playPawn(playedBoard, 1, 0, 'O')).toThrow('can\'t play when a pawn is already played');
    });
});
