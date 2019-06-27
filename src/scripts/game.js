import { winningGame } from "./winning.js";

// The player that has won the game
// Empty if no one has won
let winner = "";

// TODO: modal display name's winner with button for reload board X
// TODO: Display alert AFTER the player has played X
// TODO: Player shouldn't be able to play BEFORE the AI has played X
// TODO: fix no display winner in modal 1/3
//à chaque tour ia recupère un tab des cases vide  le map et fait un random du tab

export function initializeGame() {
  const grid = Array.from(document.getElementsByClassName("box"));
  grid.map((cell, index) => {
    cell.addEventListener("click", () => {
      console.log(cell, index, "cell et index");
      playAPawn(grid, "X");

      if (winner !== "") {
        setTimeout(() => modal(), 500);
        return;
      }

      setTimeout(() => {
        aiPlayAPawn("O", Math.random);
      }, 400);
    });
  });
}

/**
 * Should play a pawn at the given index
 * Returns the new board
 */
function getPosition(index) {
  // index des box
  switch (index) {
    case '0': 1;
      break;
    case '1': 2;
      break;
    case '2': 3;
      break;
    case '3': 4;
      break;
    case '4': 5;
      break;
    case '5': 6;
      break;
    case '6': 7;
      break;
    case '7': 8;
      break;
    case '8': 9;
      break;
  }

  return index;

}
export function playAPawn(grid, player) {
  // get back positions

  // get back DOM elements

  //console.log(box, "box");
  // Check if there is a winner
  winner = winningGame(grid, player);
  //put pawn in grid
  if (box) {
    box.innerHTML === player
  }
  return grid;
}

/**
 * Should play a pawn with the given randomNumber
 * And return the new board
 */
export function aiPlayAPawn(grid, player, seed) {
  //filtre les cases vide
  grid = Array.from(document.getElementsByClassName("box"));

  let emptyGrid = grid.filter(box => box.innerText === "");
  let randIndex = Math.floor(seed * emptyGrid.length);

  // Get random index between 0 and 8

  // //let tabEmptyIndex = [];
  // // Get coordinates based on the random index

  const result = playAPawn(grid, randIndex, player);

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
