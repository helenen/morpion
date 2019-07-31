import { generateBoard, playPawn, aiPlayPawn } from "./scripts/game2.js";
import { winningGame } from "./scripts/winning2.js";

function render(board) {
  const container = document.createElement("DIV");
  container.setAttribute("class", "container");
  document.body.appendChild(container);

  for (let i = 0; i < board.length; i++) {
    const column = document.createElement("div");
    column.setAttribute("class", "column");
    container.appendChild(column);

    for (let j = 0; j < board[i].length; j++) {
      const box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("value", "null");
      box.setAttribute("id", "col-" + i + " row-" + j);
      column.appendChild(box);

      if (board[i][j]) {
        box.innerHTML = board[i][j];
      }

      box.addEventListener("click", () => {
        playPawn(board, i, j, "X");

        container.remove();

        let newBoard = document.createElement("DIV");
        console.log(newBoard);
        document.body.appendChild(newBoard);
        newBoard.appendChild(column);

        newContainer = document.body.replaceChild(newBoard, container);

        return render(newContainer);
        // board = playPawn(board, i, j, "X")
        // return render(board)

        // https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
      });
    }
  }
}

render(generateBoard());
