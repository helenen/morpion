
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

    console.log(coordinates.row, coordinates.column, "position");

    // put a X or O when there is a empty string
    if (board[coordinates.row][coordinates.column] === "") {
        board[coordinates.row][coordinates.column] = player

    } else {
        "error: can't play when a pawn is already played"
    }

    console.log(board, "board");
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
