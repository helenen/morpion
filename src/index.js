import { generateBoard, playPawn, winner } from './scripts/game2.js';



function generateInterface(board) {

    const boardContainer = document.createElement("DIV");
    boardContainer.setAttribute('class', 'container');
    document.body.appendChild(boardContainer);

    for (let i = 0; i < board.length; i++) {
        const column = document.createElement("div");
        column.setAttribute('class', 'column');
        boardContainer.appendChild(column);

        for (let j = 0; j < board[i].length; j++) {
            const box = document.createElement("div");
            box.setAttribute('class', 'box');
            column.appendChild(box);
        }
    }

}

generateInterface(generateBoard())

function playPawnDom(board) {

    let box = Array.from(document.getElementsByClassName('box'))

    box.map((e, index) => {
        e.addEventListener("click", () => {
            //place pawn in board functionnal
            playPawn(board, index, "X");

            //display player in DOM
            e.innerHTML = "X"

            //check if there is a winner and display a modal
            if (winner !== null) {
                setTimeout(() => modal(), 500);
                return
            }

        })
    });
}

playPawnDom(generateBoard())

/** display a modal with winner's name
 *
 */
export function modal() {
    //create div with class modal-container
    const modalContainer = document.createElement("DIV");
    modalContainer.setAttribute('class', 'modal-container');

    //create P tag
    const modalText = document.createElement("P");

    //create div with class modal
    const modal = document.createElement("DIV");
    modal.setAttribute('class', 'modal');

    //create button
    const reloadButton = document.createElement("BUTTON");
    reloadButton.setAttribute('class', 'reload-button');

    //nest elements in DOM
    document.body.appendChild(modal);
    modal.appendChild(modalContainer);
    modalContainer.appendChild(modalText);
    modalContainer.appendChild(reloadButton);

    //display words
    modalText.innerHTML = "Tu as gagné " + winner;
    reloadButton.innerHTML = "recommencer";

    //refresh window
    reloadButton.onclick = () => window.location.reload();


}