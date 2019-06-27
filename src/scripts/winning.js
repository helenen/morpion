/**
 * Checks if the player has won horizontally
 * @param {*} grid 
 * @param {*} player 
 */
export function winningHorizonal(grid, player) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        count = 0;
        for (let y = 0; y < grid[i].length; y++) {
            if (grid[i][y] === player) {
                count += 1;
            }
        }
        if (count === 3) {
            return true;
        }
    }
    // console.log(grid, 'gridHo');
    return false;
}

/**
 * Checks if the player has won diagonally
 * @param {*} grid 
 * @param {*} player 
 */
export function winningDiagonal(grid, player) {
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2]) {
        return true;
    } else if (grid[0][2] === player && grid[1][1] === player && grid[2][0]) {
        return true;
    }
    return false;
    //console.log(grid, 'gridDia');
}

/**
 * Checks if the player has won vertically
 * Returns true if he has won
 * False otherwise
 * @param {*} grid 
 * @param {*} player 
 */
export function winningVertical(grid, player) {
    // première colonne
    if (grid[0][0] === player &&
        grid[1][0] === player &&
        grid[2][0] === player) {
        return true
    }

    // deuxième colonne
    if (grid[0][1] === player &&
        grid[1][1] === player &&
        grid[2][1] === player) {
        return true
    }

    // troisième colonne
    if (grid[0][2] === player &&
        grid[1][2] === player &&
        grid[2][2] === player) {
        return true
    }

    return false
}

export function winningGame(grid, player) {
    let horizontal = winningHorizonal(grid, player);
    let vertical = winningVertical(grid, player);
    let diagonal = winningDiagonal(grid, player);

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
