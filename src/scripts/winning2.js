/**
 * Checks if the player has won horizontally
 * @param {*} board 
 * @param {*} player 
 */
export function winningHorizonal(board, player) {
    let count = 0;

    for (let i = 0; i < board.length; i++) {
        count = 0;
        for (let y = 0; y < board[i].length; y++) {
            if (board[i][y] === player) {
                count += 1;
            }
        }
        if (count === 3) {
            return true;
        }
    }
    // console.log(board, 'boardHo');
    return false;
}

/**
 * Checks if the player has won diagonally
 * @param {*} board 
 * @param {*} player 
 */
export function winningDiagonal(board, player) {
    if (board[0][0] === player && board[1][1] === player && board[2][2]) {
        return true;
    } else if (board[0][2] === player && board[1][1] === player && board[2][0]) {
        return true;
    }
    return false;
    //console.log(board, 'boardDia');
}

/**
 * Checks if the player has won vertically
 * Returns true if he has won
 * False otherwise
 * @param {*} board 
 * @param {*} player 
 */
export function winningVertical(board, player) {
    // première colonne
    if (board[0][0] === player &&
        board[1][0] === player &&
        board[2][0] === player) {
        return true
    }

    // deuxième colonne
    if (board[0][1] === player &&
        board[1][1] === player &&
        board[2][1] === player) {
        return true
    }

    // troisième colonne
    if (board[0][2] === player &&
        board[1][2] === player &&
        board[2][2] === player) {
        return true
    }

    return false
}

//Checks if the player has won horizontally, diagonally, vertically
export function winningGame(board, player) {
    let horizontal = winningHorizonal(board, player);
    let vertical = winningVertical(board, player);
    let diagonal = winningDiagonal(board, player);

    if (horizontal) {
        return player;
    }

    if (vertical) {
        return player;
    }

    if (diagonal) {
        return player;
    }

    return null;
}
