import { winningGame } from "./winning2.js";

// create a board
export function generateBoard() {
  let board = new Array(
    new Array(null, null, null),
    new Array(null, null, null),
    new Array(null, null, null)
  );
  return board;
}

// play a pawn in board
export function playPawn(board, row, column, player) {
  // put a X or O when there is a empty string
  if (!board[row][column]) {
    board[row][column] = player;
  } else {
    throw new Error("can't play when a pawn is already played");
  }

  return board;
}

//AI play a pawn in board
export function aiPlayPawn(board, player = 'O', seed = Math.random) {
  let positions = [];

  //get back empty box and push in positions array
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) {
        positions.push({ column: j, row: i });
      }
    }
  }

  // Get random index of emptyGrid
  let randIndex = Math.floor(seed * positions.length);

  playPawn(
    board,
    positions[randIndex].row,
    positions[randIndex].column,
    player
  );

  return board;
}

export function isGameOver(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) {
        return false
      }
    }
  }

  return true;
}
