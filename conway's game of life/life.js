const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const boxSize = 39;
const borderWidth = 1;
const boxes = Math.floor(600 / boxSize);
canvas.addEventListener("click", e => handleClick(e, canvasContext), false);
startButton.addEventListener("click", e => start(e, canvasContext));

const elemLeft = canvas.offsetLeft;
const elemTop = canvas.offsetTop;

console.log(createArrayOfCells(boxSize, borderWidth, canvasContext));

function createArrayOfCells(cellSize, border, c) {
  const elements = [];
  let widthValue = 0;
  let heightValue = 0;
  c.beginPath();
  c.lineWidth = border;
  c.strokeStyle = "black";
  c.fillStyle = "black";
  for (let row = 0; row < 2; row++) {
    for (let column = 0; column < 3; column++) {
      elements.push({
        x: widthValue,
        y: heightValue,
        filled: false,
        willDie: false
      });
      widthValue += cellSize + border;
      let x = column * cellSize + border;
      let y = row * boxSize;
      c.rect(x, y, cellSize, cellSize);
      c.stroke();
    }
    heightValue += cellSize + border;
  }
  c.closePath();
  return elements;
}

function handleClick(e, c) {
  c.fillStyle = "black";

  c.fillRect(
    Math.floor(e.offsetX / boxSize) * boxSize,
    Math.floor(e.offsetY / boxSize) * boxSize,
    boxSize,
    boxSize
  );
}

function start(e, c) {
  c.fillStyle = "red";

  c.fillRect(
    Math.floor(e.offsetX / boxSize) * boxSize,
    Math.floor(e.offsetY / boxSize) * boxSize,
    boxSize,
    boxSize
  );
}
