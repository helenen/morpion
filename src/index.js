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
export function winningDiagonal(board, player) {
  if (board[0][0] === player && board[1][1] === player && board[2][2]) {
    return true;
  } else if (board[0][2] === player && board[1][1] === player && board[2][0]) {
    return true;
  }
}
export function winningVertical(board, player) {
  let col;
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === player && count === 0) {
        count++;
        col = board[i][j];
        break;
      } else if (count > 0 && col === player) {
        count++;
        break;
      }
      return true;
    }
  }
  return false;
}
export function winningGame(board, player) {
  let horizontal = winningHorizonal(board, player);
  let vertical = winningVertical(board, player);
  let diagonal = winningDiagonal(board, player);
  if (horizontal === true) {
    return "Tu as gagné " + player;
  }
  if (vertical === true) {
    return "Tu as gagné " + player;
  }
  if (diagonal === true) {
    return "Tu as gagné " + player;
  } else {
    return "Tu as perdu " + player;
  }
}
export function aiPlayAPawn(board, player) {
  const value = player ? "X" : "O";
  const row = Math.floor(Math.random() * 10);
  const column = Math.floor(Math.random() * 10);
  const caseValue = board[row][column] == "" ? value : value === player ? "X" : "O";
  board[row][column] = caseValue;
  return board;
}
