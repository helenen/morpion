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

export function winningHorizonal(board, player) {
  if(board[0][0] === player && board[0][1]=== player && board[0][2]){
    return true;
  }else if(board[1][0] === player && board[1][1]=== player && board[2][1]){
    return true;
  }else if(board[2][0] === player && board[2][1]=== player && board[2][2]){
    return true;
  }
  return false;
}
export function winningDiagonal(board, player) {   
  if(board[0][0] === player && board[1][1]=== player && board[2][2]){
    return true
  }else if(board[0][2] === player && board[1][1]===player && board[2][0]){
    return true;
  }
  return false;
}
export function winningVertical(board, player) {
  
  if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true
  } else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true
  } else if (board[0][3] === player && board[1][3] === player && board[2][3] === player) {
    return true
  }
  return false ;
}

export function winningGame(board, player) {
  if(winningHorizonal(board, player) || winningVertical(board, player) || winningDiagonal(board, player)){
    return "Tu as gagné " + player;
  }else{
    return "Tu as perdu " + player;
  }
  
}
