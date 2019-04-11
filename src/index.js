export function generateBoard() {
  let grid = new Array(
    new Array("", "", ""),
    new Array("", "", ""),
    new Array("", "", "")
  );
  return grid;
}

export function playAPawn(board, row, column, playerOne) {
  const value = playerOne ? 'X' : 'O';
  const caseValue = board[row][column] !== '' ?  : value ;  
  board[row][column] = caseValue;
  console.log(board);
  return board;
}
