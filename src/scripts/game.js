import { winningGame } from "./winning.js"

// The player that has won the game
// Empty if no one has won
let winner = ""

// TODO: Stop the game once you have won
// TODO: Display alert AFTER the player has played
// TODO: Player shouldn't be able to play BEFORE the AI has played

export function initializeGame() {
  const board = generateBoard();
  const grid = Array.from(document.getElementsByClassName("box"));
  grid.map((cell, index) => {
    cell.addEventListener("click", () => {
      playAPawn(board, index, "X")

      if (winner !== "") {
        alert(winner)
        return
      }

      setTimeout(() => {
        aiPlayAPawn(board, "O", Math.random)
      }, 1000)
    });
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
export function playAPawn(board, index, player) {
  console.log(index);
  // Get coordinates based on index
  const coordinates = getPosition(index);

  // Get the DOM node in which we want to play
  const boxGrid = document.getElementById(`box${index}`);

  // Play the pawn
  if (board[coordinates.row][coordinates.column] === "") {
    boxGrid.innerHTML = player;
    board[coordinates.row][coordinates.column] = player;
  }

  // Check if there is a winner
  winner = winningGame(board, player);

  return board;
}

/**
 * Should play a pawn with the given randomNumber
 * And return the new board
 */
export function aiPlayAPawn(board, player, seed) {
  // Get random index between 0 and 8
  let randIndex = Math.floor(seed() * 9);

  // Get coordinates based on the random index
  let coord = getPosition(randIndex)

  // Check if the coordinates are valid
  while (board[coord.row][coord.column] !== "") {
    randIndex = Math.floor(seed() * 9);
    coord = getPosition(randIndex)
  }

  console.log(`PLAYING ON ${coord}`);
  const result = playAPawn(board, randIndex, player);

  return result;
}

/* console.log(aiPlayAPawn([["X", "", ""], ["", "", ""], ["", "", ""]], "O", () => 0.9, () => 0.5)); */
