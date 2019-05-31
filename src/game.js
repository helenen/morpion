// Determines the player's turn
let player = "X"

export function initializeGame() {
  const board = generateBoard()
  const grid = Array.from(document.getElementsByClassName("box"))
  grid.map((cell, index) => {
    cell.addEventListener("click", playAPawn.bind(null, board, index))

  })

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
      }
    },
    1: () => {
      return {
        row: 1,
        column: 0
      }
    },
    2: () => {
      return {
        row: 2,
        column: 0
      }
    },
    3: () => {
      return {
        row: 0,
        column: 1
      }
    },
    4: () => {
      return {
        row: 1,
        column: 1
      }
    },
    5: () => {
      return {
        row: 2,
        column: 1
      }
    },
    6: () => {
      return {
        row: 0,
        column: 2
      }
    },
    7: () => {
      return {
        row: 1,
        column: 2
      }
    },
    8: () => {
      return {
        row: 2,
        column: 2
      }
    }
  }

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
  const boxGrid = document.getElementById(`box${index}`)

  // Play the pawn
  if (board[coordinates.row][coordinates.column] === "") {
    boxGrid.innerHTML = player;
    board[coordinates.row][coordinates.column] = player
  }

  // Change the player's turn
  if (player === "X") {
    player = "O"
  } else {
    player = "X"
  }

  // Check if there is a winner
  const message = winningGame(board, player)
  console.log(message)

  return board
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

// TODO: Fix this function
export function winningGame(board, player) {
  let horizontal = winningHorizonal(board, player);
  let vertical = winningVertical(board, player);
  let diagonal = winningDiagonal(board, player);

  if (horizontal === true) {
    return "Tu as gagné ho " + player;
  }

  if (vertical === true) {
    return "Tu as gagné ve " + player;
  }

  if (diagonal === true) {
    return "Tu as gagné di " + player;
  } else {
    return "Tu as perdu " + player;
  }
}

/**
 * Should play a pawn with the given randomNumber
 * And return the new board
 */
export function aiPlayAPawn(board, player, rowSeed, columnSeed) {
  const row = Math.floor(rowSeed() * 3)
  const column = Math.floor(columnSeed() * 3)
  const result = playAPawn(board, row, column, player);

  return result
}

/* console.log(aiPlayAPawn([["X", "", ""], ["", "", ""], ["", "", ""]], "O", () => 0.9, () => 0.5)); */