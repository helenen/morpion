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
  let ho = winningHorizonal(board, player);
  let ver = winningVertical(board, player);
  let dia = winningDiagonal(board, player);
  // console.log("result", ho);
  // console.log("ver", ver);
  // console.log("dia", dia);
  if (ho === true) {
    console.log("ho", ho);
    return "Tu as gagné " + player;

  }
  if (ver === true) {
    console.log("ver", ver);
    return "Tu as gagné " + player;
  }
  if (dia === true) {
    console.log("dia", dia);
    return "Tu as gagné " + player;
  }
  else {
    //console.log("zouzou", board);
    return "Tu as perdu " + player;
  }
}
