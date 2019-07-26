/**
 * Checks if the player has won horizontally
 * @param {Array} board
 * @param {String} player
 */
export function winningHorizonal(board, player) {
  let count;

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
 * @param {Array} board
 * @param {String} player
 */
export function winningDiagonal(board, player) {
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }

  if (
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
 * @param {Array} board
 * @param {String} player
 */
export function winningVertical(board, player) {
  for (let y = 0; y < board[0].length; y++) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][y] === player) {
        count++;
      }
    }
    if (count === 3) {
      return true
    }
  }

  return false;
}

//Checks if the player has won horizontally, diagonally, vertically
export function winningGame(board, player) {
  return winningHorizonal(board, player) || winningVertical(board, player) || winningDiagonal(board, player);
}
