export function generateBoard() {
  let grid = new Array(3).fill([null, null, null]);       
  return grid;
}

export function playAPawn() {
  const board = generateBoard();
  console.log(board);
  // const mapCell = board.map(boardItem =>{
  //   console.log(boardItem);
  // boardItem.map(subBoardItem =>{
  //   console.log(subBoardItem);
  // });
  // if (boardItem !== null){
  //   boardItem.value === 'x';
  // }
  // else{
  //   boardItem.value === null;
  // }
// });
  return mapCell;
}