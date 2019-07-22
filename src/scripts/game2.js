import { winningGame } from "./winning2.js";

//winner
export let winner = "";

// create a board
export function generateBoard() {
    let board = new Array(
        new Array(0, 0, 0),
        new Array(0, 0, 0),
        new Array(0, 0, 0)
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
    let box = document.getElementsByClassName("box");

    // insert id in html balises
    for (var i = 0; i < box.length; ++i) {
        box[i].setAttribute("id", "123456789".charAt(i));
    }

    //index
    let position = getPosition(index);


    // put a X or O when there is a empty string
    if (board[position.row][position.column] === 0) {
        box[index].innerText = player === 1 ? "X" : "O";
        board[position.row][position.column] = player;
    } else {
        ("error: can't play when a pawn is already played");
    }
    // Check if there is a winner
    winner = winningGame(board, player);

    return board;
}

//AI play a pawn in board
export function aiPlayPawn(board, player, seed) {
    let positions = []
    console.log(positions)
    let row = Math.floor(Math.random() * 3);
    let column = Math.floor(Math.random() * 3);


    for (let i = 0; i < board.length; i++) {


        for (let j = 0; j < board[i].length; j++) {
            if (board[row][column] !== player) {

                positions.push({ 'column': i, 'row': j })
            }
        }
    }
    //console.log(positions, "positions")
    // Get random index of emptyGrid
    let randIndex = Math.floor(seed * positions.length);


    const result = playPawn(board, randIndex, player);

    return result;
}

