import { generateBoard, playPawn, aiPlayPawn } from "./scripts/game2.js";
import { winningGame } from "./scripts/winning2.js";

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
            box.setAttribute("id", "col-" + i + " row-" + j);
            column.appendChild(box);

            if (board[i][j]) {
                box.innerHTML = board[coord.row][coord.column];
            }

            box.addEventListener("click", () => {


                console.log(box);
                //mainContainer.remove();

                let newContainer = playPawn(board, row, column, 1)

                //let winner = winningGame(board);


                //aiPlayPawn(board, "O", Math.random);



                // if (winner) {
                //     setTimeout(() => modal(winner), 200);
                //     return;
                // }

                render(newContainer)



            });
        }
    }
}

render(generateBoard());


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

// function o (str){
//     var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
//    var regex = /"(.*?)"/;
//    var found = paragraph.match(regex);
//     console.log(found)
//     return found
//     }

//     o()