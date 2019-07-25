import { winningGame } from "./winning2.js";

//winner
export let winner;

export let turnCount = 0;

// create a board
export function generateBoard() {
  let board = new Array(
    new Array(0, 0, 0),
    new Array(0, 0, 0),
    new Array(0, 0, 0)
  );
  return board;
}

// play a pawn in board
export function playPawn(board, row, column, player) {
  // put a X or O when there is a empty string
  if (board[row][column] === 0) {
    board[row][column] = player;
  } else {
    ("error: can't play when a pawn is already played");
  }

  //stop to turn 6
  if (turnCount === 6) {
    return;
  }
  // Check if there is a winner

  return board;
}

//AI play a pawn in board
export function aiPlayPawn(board, player, seed) {
  let positions = [];

  //get back empty box and push in positions array
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        positions.push({ column: j, row: i });
      }
    }
  }
  turnCount += 1;
  if (turnCount === 5) {
    return;
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
