export function generateBoard() {
  let grid = new Array(3).fill(['', '', '']);       
  return grid;
}

export function playAPawn(board,row,column,gamerOne) {

  board[row][column]= gamerOne;
  console.log(board);
  return board;
}

