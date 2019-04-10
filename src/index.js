export function generateBoard() {
  let grid = new Array(3).fill(["", "", ""]);
  return grid;
}

export function playAPawn(board, row, column, garmerOne) {
  board = generateBoard();
  const gamerOneplay = board.replace(\w,garmerOne);
  return gamerOneplay;
}

playAPawn(generateBoard(), 0, 0, "X");
