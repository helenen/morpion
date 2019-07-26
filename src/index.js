import { generateBoard, playPawn, aiPlayPawn } from './scripts/game2.js'
import { winningGame } from "./scripts/winning2.js";

function render(board) {
    const boardContainer = document.createElement("DIV");
    const newboardContainer = document.createTextNode("DIV");
    boardContainer.appendChild(newboardContainer);
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
            box.setAttribute("id", "col-" + i + ' row-' + j);

            if (board[i][j]) {
                box.innerHTML = board[i][j]
            }

            box.addEventListener('click', () => {
                const newBoard = playPawn(board, i, j, "X")
                render(newBoard)
            });

            column.appendChild(box);
        }
    }
}

render(generateBoard())