export function generateCell() {
  let grid = [];
  let input = '<input type="text/>';
  for (var i = 0; i < 9; i++) {
    grid.push(input);
    console.log(grid);
  }
  return grid;
}
