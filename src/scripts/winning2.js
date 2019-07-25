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

  return false;
}

/**
 * Checks if the player has won diagonally
 * @param {*} board
 * @param {*} player
 */
export function winningDiagonal(board, player) {
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  } else if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }
  return false;
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
  if (
    board[0][0] === player &&
    board[1][0] === player &&
    board[2][0] === player
  ) {
    return true;
  }

  // deuxième colonne
  if (
    board[0][1] === player &&
    board[1][1] === player &&
    board[2][1] === player
  ) {
    return true;
  }

  // troisième colonne
  if (
    board[0][2] === player &&
    board[1][2] === player &&
    board[2][2] === player
  ) {
    return true;
  }

  return false;
}

//Checks if the player has won horizontally, diagonally, vertically
export function winningGame(board) {
  let horizontalOne = winningHorizonal(board, 1);
  let horizontalTwo = winningHorizonal(board, 2);
  let verticalOne = winningVertical(board, 1);
  let verticalTwo = winningVertical(board, 2);
  let diagonalOne = winningDiagonal(board, 1);
  let diagonalTwo = winningDiagonal(board, 2);

  if (horizontalOne) {
    return 1;
  }
  if (horizontalTwo) {
    return 2;
  }

  if (verticalOne) {
    return 1;
  }
  if (verticalTwo) {
    return 2;
  }

  if (diagonalOne) {
    return 1;
  }
  if (diagonalTwo) {
    return 2;
  }

  return null;
}
