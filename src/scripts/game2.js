import { winningGame } from "./winning.js";

let winner = "";

// create a board
export function generateBoard() {
    let board = new Array(
        new Array("", "", ""),
        new Array("", "", ""),
        new Array("", "", "")
    );
    return board;
}


// play a pawn in board
export function playPawn(board, row, column, player) {

    // put a X or O when there is a empty string
    if (board[row][column] === "") {
        board[row][column] = player
    } else {
        "error: can't play when a pawn is already played"
    }
    // winner
    winner = winningGame(board, player);

    return board
}

//AI play a pawn in board
export function aiPlayPawn(board, player, rowSeed, columnSeed) {
    // Get random index between 0 and 2
    const row = Math.floor(rowSeed() * 3)
    const column = Math.floor(columnSeed() * 3)

    //play a pawn
    const result = playPawn(board, row, column, player);

    return result;
}

//initialize game board in the DOM
export function initializeGame() {
    //get back DOM's elements 
    const grid = Array.from(document.getElementsByClassName("box"));
    grid.map((cell, index) => {
        cell.addEventListener("click", () => {
            console.log(cell, index, "cell et index");
            playAPawn(grid, "X");

            if (winner !== "") {
                setTimeout(() => modal(), 500);
                return;
            }

            setTimeout(() => {
                aiPlayAPawn("O", Math.random);
            }, 400);
        });
    });
}
