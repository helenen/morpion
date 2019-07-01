// create a board
export function generateBoard() {
    let board = new Array(
        new Array("", "", ""),
        new Array("", "X", ""),
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