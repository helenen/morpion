/**
 * Checks if the player has won horizontally
 * @param {*} boxGrid 
 * @param {*} player 
 */
export function winningHorizonal(boxGrid, player) {
    let count = 0;

    for (let i = 0; i < boxGrid.length; i++) {
        count = 0;
        for (let y = 0; y < boxGrid[i].length; y++) {
            if (boxGrid[i][y] === player) {
                count += 1;
            }
        }
        if (count === 3) {
            return true;
        }
    }
    // console.log(boxGrid, 'boxGridHo');
    return false;
}

/**
 * Checks if the player has won diagonally
 * @param {*} boxGrid 
 * @param {*} player 
 */
export function winningDiagonal(boxGrid, player) {
    if (boxGrid[0][0] === player && boxGrid[1][1] === player && boxGrid[2][2]) {
        return true;
    } else if (boxGrid[0][2] === player && boxGrid[1][1] === player && boxGrid[2][0]) {
        return true;
    }
    return false;
    //console.log(boxGrid, 'boxGridDia');
}

/**
 * Checks if the player has won vertically
 * Returns true if he has won
 * False otherwise
 * @param {*} boxGrid 
 * @param {*} player 
 */
export function winningVertical(boxGrid, player) {
    // première colonne
    if (boxGrid[0][0] === player &&
        boxGrid[1][0] === player &&
        boxGrid[2][0] === player) {
        return true
    }

    // deuxième colonne
    if (boxGrid[0][1] === player &&
        boxGrid[1][1] === player &&
        boxGrid[2][1] === player) {
        return true
    }

    // troisième colonne
    if (boxGrid[0][2] === player &&
        boxGrid[1][2] === player &&
        boxGrid[2][2] === player) {
        return true
    }

    return false
}

export function winningGame(boxGrid, player) {
    let horizontal = winningHorizonal(boxGrid, player);
    let vertical = winningVertical(boxGrid, player);
    let diagonal = winningDiagonal(boxGrid, player);

    if (horizontal) {
        return player;
    }

    if (vertical) {
        return player;
    }

    if (diagonal) {
        return player;
    }

    return "";
}
