import { winningGame } from "./winning.js";

// The player that has won the game
// Empty if no one has won
let winner = "";

// TODO: modal display name's winner with button for reload board X
// TODO: Display alert AFTER the player has played X
// TODO: Player shouldn't be able to play BEFORE the AI has played
// TODO: fix no display winner in modal 1/3
//à chaque tour ia recupère un tab des cases vide  le map et fait un random du tab

export function initializeGame() {
  const board = generateBoard();
  const grid = Array.from(document.getElementsByClassName("box"));
  grid.map((cell, index) => {
    cell.addEventListener("click", () => {
      playAPawn(board, index, "X");

      if (winner !== "") {
        setTimeout(() => modal(), 500);
        return;
      }

      setTimeout(() => {
        aiPlayAPawn(board, "O", Math.random);
      }, 400);
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
  board = generateBoard();
  let randIndex = Math.floor(seed() * 9);

  board.filter((cell, coord) => {});

  // Get random index between 0 and 8

  // // Get coordinates based on the random index

  const result = playAPawn(board, randIndex, player);

  return result;
}

/** display a modal with winner's name
 *
 */
export function modal() {
  const modalText = document.createElement("P"); // cree un element <p></p>
  const buttonReload = document.createElement("BUTTON"); // cree un element button
  const modalBlock = document.getElementById("modal").appendChild(modalText); //donne l'élement <p></p> à la classe modal
  document.getElementById("modal").appendChild(buttonReload);
  const mainContainer = document.getElementById("mainContainer");

  modalBlock.innerHTML = "Tu as gagné " + winner; // écrire qui gagne
  modalBlock.style.visibility = "visible"; // affiche modal

  mainContainer.style.display = "block"; // affiche main container

  buttonReload.onclick = () => location.reload(); // refresh document
  buttonReload.innerHTML = "refresh";
}
