export function generateBoard() {
  let grid = new Array(
    new Array("", "", ""),
    new Array("", "", ""),
    new Array("", "", "")
  );
  return grid;
}

export function playAPawn(board, row, column, playerOne) {
  const value = playerOne ? "X" : "O";
  const caseValue =
    board[row][column] == "" ? value : value === playerOne ? "X" : "O";
  board[row][column] = caseValue;
  return board;
}

export function winningHorizonal(board, player) {
  let count = 0

  for (let i = 0; i < board.length; i++) {
    count = 0
    for (let y = 0; y < board[i].length; y++) {
      if (board[i][y] === player) {
        count += 1
      }
    }
    if (count === 3) {
      return true
    }
  }
  return false
}
export function winningDiagonal(board, player) {
  for (let i = 0, j = 0; i < board.length; i++ , j--) {
    board[i][i] === player ? true : false;
    console.log("pilou", board);

  }
  // if (board[0][0] === player && board[1][1] === player && board[2][2]) {
  //   return true
  // } else if (board[0][2] === player && board[1][1] === player && board[2][0]) {
  //   return true;
  // }

}
export function winningVertical(board, player) {

  if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true
  } else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true
  } else if (board[0][3] === player && board[1][3] === player && board[2][3] === player) {
    return true
  }
  return false;
}

export function winningGame(board, player) {
  if (winningHorizonal(board, player) || winningVertical(board, player) || winningDiagonal(board, player)) {
    return "Tu as gagné " + player;
  } else {
    return "Tu as perdu " + player;
  }

}
