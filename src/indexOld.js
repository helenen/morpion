import {
  generateBoard,
  playPawn,
  aiPlayPawn,
  turnCount
} from "./scripts/game2.js";
import { winningGame } from "./scripts/winning2.js";
//create interface
function generateInterface(board) {
  const boardContainer = document.createElement("DIV");
  boardContainer.setAttribute("class", "container");
  document.body.appendChild(boardContainer);

  for (let i = 0; i < board.length; i++) {
    const column = document.createElement("div");
    column.setAttribute("class", "column");
    boardContainer.appendChild(column);

    for (let j = 0; j < board[i].length; j++) {
      const box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("value", "null");

      column.appendChild(box);
    }
  }
  //HTML element
  let box = Array.from(document.getElementsByClassName("box"));

  // insert id in html balises
  for (var i = 0; i < box.length; ++i) {
    box[i].setAttribute("id", "123456789".charAt(i));
  }
}

generateInterface(generateBoard());

//waiting time : playPawn don't call same time aiPlayPawn
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
//give position index => row and column
function getPosition(index) {
  const coordinates = {
    0: {
      row: 0,
      column: 0
    },
    1: {
      row: 1,
      column: 0
    },
    2: {
      row: 2,
      column: 0
    },
    3: {
      row: 0,
      column: 1
    },
    4: {
      row: 1,
      column: 1
    },
    5: {
      row: 2,
      column: 1
    },
    6: {
      row: 0,
      column: 2
    },
    7: {
      row: 1,
      column: 2
    },
    8: {
      row: 2,
      column: 2
    }
  };

  return coordinates[index];
}

//display pawns in DOM
function renderBoard(board) {
  let box = Array.from(document.getElementsByClassName("box"));
  for (var index = 0; index < 9; index++) {
    let coord = getPosition(index);
    if (board[coord.row][coord.column] === 1) box[index].innerText = "X";
    else if (board[coord.row][coord.column] === 2) box[index].innerText = "O";
  }
}

//call function playPanw and aiPlaypawn each click
function playPawnDom(board) {
  let box = Array.from(document.getElementsByClassName("box"));

  box.map((e, index) => {
    e.addEventListener(
      "click",
      () => {
        //place pawn in board functionnal
        let coord = getPosition(index);
        board = playPawn(board, coord.row, coord.column, 1);

        let winner = winningGame(board);

        renderBoard(board);

        sleep(400);

        aiPlayPawn(board, 2, Math.random());
        renderBoard(board);
        winner = winningGame(board);

        console.log(winner);
        //check if there is a winner and display a modal
        if (winner) {
          setTimeout(() => modal(winner), 200);
          return;
        }
      },
      true
    );
  });
}

playPawnDom(generateBoard());

/** display a modal with winner's name
 *
 */
export function modal(winner) {
  let box = Array.from(document.getElementsByClassName("box"));
  //create div with class modal-container
  const modalContainer = document.createElement("DIV");
  modalContainer.setAttribute("class", "modal-container");

  //create P tag
  const modalText = document.createElement("P");

  //create div with class modal
  const modal = document.createElement("DIV");
  modal.setAttribute("class", "modal");

  //create reload button
  const reloadButton = document.createElement("BUTTON");
  reloadButton.setAttribute("class", "reload-button");

  //create close button
  const closeButton = document.createElement("BUTTON");
  closeButton.setAttribute("class", "close");

  //nest elements in DOM
  document.body.appendChild(modal);
  modal.appendChild(modalContainer);
  modalContainer.appendChild(modalText);
  modalContainer.appendChild(reloadButton);
  modalContainer.appendChild(closeButton);

  //display winner's sentences

  if (winner === 1) {
    modalText.innerHTML = "Tu as gagné X";
  } else if (winner === 2) {
    modalText.innerHTML = "Tu as gagné O";
  }

  if (box.innerHTML !== "" && turnCount === 6 && winner === null) {
    modalText.innerHTML = "Match nul";
  }
  reloadButton.innerHTML = "recommencer";
  closeButton.innerHTML = "&times";

  //refresh window
  reloadButton.onclick = () => window.location.reload();

  //remove modal
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}
