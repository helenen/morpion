import {
    aiPlayPawn
} from "../scripts/game2";


describe("aiPlaceAPawn method", () => {
    test("should play a pawn in the middle of the board", () => {
        const board = [["", "", ""], ["", "", ""], ["", "", ""]];

        expect(aiPlayPawn(board, "O", () => 0.5, () => 0.5)).toEqual([
            ["", "", ""],
            ["", "O", ""],
            ["", "", ""]
        ]);
    });

    test("should play a pawn on the first row, second column", () => {
        const board = [["X", "", ""], ["", "", ""], ["", "", ""]];
        expect(aiPlayPawn(board, "O", () => 0, () => 0.5)).toEqual([
            ["X", "O", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
    });

    test("AI don't place a pawn on other pawn", () => {
        const board = [["X", "", ""], ["", "", ""], ["", "", ""]];
        expect(aiPlayPawn(board, "O", () => 0.8, () => 0.5)).toEqual([
            ["X", "", ""],
            ["", "", ""],
            ["", "O", ""]
        ]);
    });
});

// describe("initialize board", () => {
//     test("should return a DOM's board", () => {
//         const wrapper = shallow('box1');
//         wrapper.find('box1').simulate('click');
//         expect(wrapper).toBe(true);
//     })
// })
