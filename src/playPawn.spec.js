import {
    generateBoard,
    playAPawn,
} from "./game";
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe("Should play a pawn", () => {
    const board = generateBoard();

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

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
