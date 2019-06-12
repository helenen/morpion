import {
    generateBoard,
    playAPawn,
} from "../scripts/game";
const fs = require('fs');
const path = require('path');

describe("Should play a pawn", () => {
    const board = generateBoard();

    test("should return board modified with player", () => {
        expect(playAPawn(board, 0, 0, "X")).toEqual([
            ["X", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
    });

    test("should return board modified with playerTwo", () => {
        expect(playAPawn(board, 1, 0, "O")).toEqual([
            ["X", "", ""],
            ["O", "", ""],
            ["", "", ""]
        ]);
    });

    test("should don't modify a pawn already played", () => {
        expect(playAPawn(board, 1, 0, "X")).toEqual([
            ["X", "", ""],
            ["O", "", ""],
            ["", "", ""]
        ]);
    });
});
