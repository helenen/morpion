// Determines the player's turn
let player = "X";

export function initializeGame() {
  const board = generateBoard();
  const grid = Array.from(document.getElementsByClassName("box"));
  grid.map((cell, index) => {
    cell.addEventListener("click", playAPawn.bind(null, board, index));
  });
}

export function generateBoard() {
  let grid = new Array(
    new Array("", "", ""),
    new Array("", "", ""),
    new Array("", "", "")
  );
  return grid;
}

function getPosition(index) {
  const coordinates = {
    0: () => {
      return {
        row: 0,
        column: 0
      };
    },
    1: () => {
      return {
        row: 1,
        column: 0
      };
    },
    2: () => {
      return {
        row: 2,
        column: 0
      };
    },
    3: () => {
      return {
        row: 0,
        column: 1
      };
    },
    4: () => {
      return {
        row: 1,
        column: 1
      };
    },
    5: () => {
      return {
        row: 2,
        column: 1
      };
    },
    6: () => {
      return {
        row: 0,
        column: 2
      };
    },
    7: () => {
      return {
        row: 1,
        column: 2
      };
    },
    8: () => {
      return {
        row: 2,
        column: 2
      };
    }
  };

  const coordinate = coordinates[index];
  return coordinate();
}

/**
 * Should play a pawn at the given index
 * Returns the new board
 */
export function playAPawn(board, index) {
  // Get coordinates based on index
  const coordinates = getPosition(index);

  // Get the DOM node in which we want to play
  const boxGrid = document.getElementById(`box${index}`);

  // Play the pawn
  if (board[coordinates.row][coordinates.column] === "") {
    boxGrid.innerHTML = player;
    board[coordinates.row][coordinates.column] = player;
  }

  // Change the player's turn
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }

  // Check if there is a winner
  const message = winningGame(board, player);
  console.log(board, "message");

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
  // console.log(board, 'boardHo');
  return false;
}

export function winningDiagonal(board, player) {
  if (board[0][0] === player && board[1][1] === player && board[2][2]) {
    return true;
  } else if (board[0][2] === player && board[1][1] === player && board[2][0]) {
    return true;
  }
  return false;
  //console.log(board, 'boardDia');
}

export function winningVertical(board, player) {
  //nbre de fois où je tombe sur un pion
  let count;
  //colonne
  let col;

  //parcourir les tableaux
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i]; j++) {
      if (board[i][j] === player && count < 0) {
        count += 1;
        col = j;
      } else if (count > 0 && board[i][col] === player) {
        count += 1;
      } else if (board[i][col] === "") {
        count = 0;

        break;
      }
      console.log(count, "count");
    }
  }
}

// TODO: Fix this function
export function winningGame(board, player) {
  let horizontal = winningHorizonal(board, player);
  let vertical = winningVertical(board, player);
  let diagonal = winningDiagonal(board, player);

  if (horizontal) {
    return "Tu as gagné ho " + player;
  }

  if (vertical) {
    return "Tu as gagné ve " + player;
  }

  if (diagonal) {
    return "Tu as gagné " + player;
  }

  return null;
}

/**
 * Should play a pawn with the given randomNumber
 * And return the new board
 */
export function aiPlayAPawn(board, player, rowSeed, columnSeed) {
  const row = Math.floor(rowSeed() * 3);
  const column = Math.floor(columnSeed() * 3);
  const result = playAPawn(board, row, column, player);

  return result;
}

/* console.log(aiPlayAPawn([["X", "", ""], ["", "", ""], ["", "", ""]], "O", () => 0.9, () => 0.5)); */
