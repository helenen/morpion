import { join } from "path";

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

export function winningHorizonal(board, playerOne) {
  const value = playerOne ? "X" : "O";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] == value && board[i][j] <= 3 ? true : null;
      break;
    }
  }
  return board;
}
export function winningDiagonal(board, playerOne) {
  const value = playerOne ? "X" : "O";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] == value && board[i][j] <= 3 ? true : null;
      break;
    }
  }
  return board;
}
export function winningVertical(board, playerOne) {
  const value = playerOne ? "X" : "O";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] == value && board[i][j] <= 3 ? true : null;
      break;
    }
  }
  return board;
}

export function winningParty() {}
