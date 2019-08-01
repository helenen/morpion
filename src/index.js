import { generateBoard, playPawn, aiPlayPawn } from "./scripts/game2.js";
import { winningGame } from "./scripts/winning2.js";


function render(board) {
    let mainContainer = document.createElement("DIV");
    const container = document.createElement("DIV");

    mainContainer.setAttribute("class", "mainContainer");;
    container.setAttribute("class", "container");

    document.body.appendChild(mainContainer);
    mainContainer.appendChild(container);

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

                mainContainer.remove();

                let newContainer = playPawn(board, i, j, "X")


                return render(newContainer)

            });
        }
    }
}

render(generateBoard());
