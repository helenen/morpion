import { winningGame } from './winning2.js'
//winner
export let winner = "";

// create a board
export function generateBoard() {
    let board = new Array(
        new Array("", "", ""),
        new Array("", "", ""),
        new Array("", "", "")
    );
    return board;
}

function getPosition(index) {
    const coordinates = {
        0: {
            row: 0,
            column: 0
        },
        1: {
            row: 1,
            column: 0
        },
        2: {
            row: 2,
            column: 0
        },
        3: {
            row: 0,
            column: 1

        },
        4: {
            row: 1,
            column: 1

        },
        5: {
            row: 2,
            column: 1

        },
        6: {
            row: 0,
            column: 2

        },
        7: {
            row: 1,
            column: 2

        },
        8: {
            row: 2,
            column: 2

        }
    };

    return coordinates[index];

}

// play a pawn in board
export function playPawn(board, index, player) {
    let coordinates = getPosition(index);

    // put a X or O when there is a empty string
    if (board[coordinates.row][coordinates.column] === "") {
        board[coordinates.row][coordinates.column] = player

    } else {
        "error: can't play when a pawn is already played"
    }
    // Check if there is a winner
    winner = winningGame(board, player);

    return board
}

//AI play a pawn in board
export function aiPlayPawn(board, player, seed) {

    let box = Array.from(document.getElementsByClassName('box'))

    // Get random index between 0 and 8
    let emptyGrid = box.filter(box => box.innerText === "");

    let randIndex = Math.floor(seed * emptyGrid.length);

    // Get coordinates based on the random index
    let coord = getPosition(randIndex);


    if (board[coord.row][coord.column] === "") {
        console.log(board[coord.row][coord.column].innerText = player);
        alert()
    }

    console.log(board);
    // filter empty cases
    // while (board[coord.row][coord.column] !== "") {
    //     randIndex = Math.floor(seed() * 9);
    //     coord = getPosition(randIndex);
    //     break;
    // }


    const result = playPawn(board, randIndex, player);

    return result;
}
