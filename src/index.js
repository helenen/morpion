import { generateBoard, playPawn } from './scripts/game2.js';

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
            playPawn(board, index, "X");
            e.innerHTML = "X"
        })




    });


}

playPawnDom(generateBoard(), "X")