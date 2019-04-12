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
  const caseValue = board[row][column] == '' ? value : value === playerOne ? 'X' : 'O';  
  board[row][column] = caseValue;
  return board;
}

// export function winningHorizonal(board){
//   const value = playerOne ? 'X' : 'O';
//   for(let i =0; i < board.length;i++){
//     for(let j = 0; j<board[i]; j++){
//       board[row] == value ? partyFinishMessage : null;
//     }
//   }
//   const partyFinishMessage = "You're won";

//   return board + partyFinishMessage;

// }
export function winningParty(board){
  function winningHorizonal(){
    
  }

}