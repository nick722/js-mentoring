const canvas = document.getElementById("canvas");
const startButton = document.getElementById("startButton");
const C = canvas.getContext("2d");
const BOX_SIZE = 39;
const BORDER_WIDTH = 1;
const FULL_SIZE = BOX_SIZE + BORDER_WIDTH;
// const boxes = Math.floor(600 / boxSize);
canvas.addEventListener("click", e => handleClick(e, arrayOfCells), false);

// const elemLeft = canvas.offsetLeft;
// const elemTop = canvas.offsetTop;

const arrayOfCells = createArrayOfCells();
startButton.addEventListener("click", () => start(arrayOfCells));

function createArrayOfCells() {
  const elements = [];
  let heightValue = 0;
  C.beginPath();
  C.lineWidth = BORDER_WIDTH;
  C.strokeStyle = "black";
  C.fillStyle = "black";
  for (let row = 0; row < 10; row++) {
    let widthValue = 0;
    elements.push([]);
    for (let column = 0; column < 20; column++) {
      elements[row].push({
        x: widthValue,
        y: heightValue,
        filled: false,
        willDie: false,
        resurrect: false
      });
      widthValue += FULL_SIZE;
      let x = column * FULL_SIZE;
      let y = row * FULL_SIZE;
      C.rect(x, y, FULL_SIZE, FULL_SIZE);
      C.stroke();
    }
    heightValue += FULL_SIZE;
  }
  C.closePath();
  return elements;
}

function handleClick(e, gridCells) {
  x = e.offsetX;
  y = e.offsetY;

  for (let subGrid of gridCells) {
    for (let cell of subGrid) {
      if (
        cell.x < x &&
        cell.x + BOX_SIZE > x &&
        cell.y < y &&
        cell.y + BOX_SIZE > y
      ) {
        cell.filled = !cell.filled;
        paint(cell.filled, cell);
      }
    }
  }
}

/**
 * Starts the game
 * @param {Array} grid
 */
function start(grid) {
  countMarkedAdjustedCells(grid);
  paintKilled(grid);
}

function countMarkedAdjustedCells(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let sum = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        if (!grid[k]) continue;
        for (let m = j - 1; m <= j + 1; m++) {
          if (!grid[k][m]) continue;
          if (k === i && m === j) continue;
          if (grid[k][m].filled) {
            sum++;
          }
        }
      }
      killOrSpare(grid[i][j], sum);
    }
  }
}

function killOrSpare(cell, sumOfNeighbours) {
  if (cell.filled && (sumOfNeighbours < 2 || sumOfNeighbours > 3)) {
    cell.willDie = true;
  }
  if (!cell.filled && sumOfNeighbours === 3) {
    cell.resurrect = true;
  }
}

function paintKilled(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].filled && grid[i][j].willDie) grid[i][j].filled = false;
      if (!grid[i][j].filled && grid[i][j].resurrect) grid[i][j].filled = true;
      paint(grid[i][j].filled, grid[i][j]);
      grid[i][j].willDie = false;
      grid[i][j].resurrect = false;
    }
  }
}

/**
 * Paints the cell
 * @param {boolean} shouldPaint
 * @param {object} cell
 */
function paint(shouldPaint, cell) {
  C.fillStyle = shouldPaint ? "black" : "white";
  C.fillRect(cell.x + 1, cell.y + 1, BOX_SIZE - 1, BOX_SIZE - 1);
}
