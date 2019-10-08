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
startButton.addEventListener("click", e => start(arrayOfCells));

function createArrayOfCells() {
  const elements = [];
  let heightValue = 0;
  C.beginPath();
  C.lineWidth = BORDER_WIDTH;
  C.strokeStyle = "black";
  C.fillStyle = "black";
  for (let row = 0; row < 10; row++) {
    let widthValue = 0;
    for (let column = 0; column < 20; column++) {
      elements.push({
        x: widthValue,
        y: heightValue,
        filled: false,
        willDie: false
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

  // console.log("gridCells:", gridCells);

  for (let cell of gridCells) {
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

function start(grid) {
  for (let cell of grid) {
    if (cell.filled) {
      paint(!cell.filled, cell);
    }
  }
}

function paint(shouldPaint, cell) {
  C.fillStyle = shouldPaint ? "black" : "white";
  C.fillRect(cell.x + 1, cell.y + 1, BOX_SIZE - 1, BOX_SIZE - 1);
}
