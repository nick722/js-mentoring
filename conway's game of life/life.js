const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const boxSize = 40;
const boxes = Math.floor(600 / boxSize);
canvas.addEventListener("click", handleClick, false);
startButton.addEventListener("click", start);
drawField();

//elements
elemLeft = canvas.offsetLeft;
elemTop = canvas.offsetTop;
elements = [
  [
    {
      x: 0,
      y: 0,
      filled: false
    }
  ]
];

function drawField() {
  c.beginPath();
  c.lineWidth = 0.5;
  c.strokeStyle = "black";
  for (let row = 0; row < boxes; row++) {
    for (let column = 0; column < boxes; column++) {
      let x = column * boxSize;
      let y = row * boxSize;
      c.rect(x, y, boxSize, boxSize);
      c.stroke();
    }
  }
  c.closePath();
}

function handleClick(e) {
  c.fillStyle = "black";

  c.fillRect(
    Math.floor(e.offsetX / boxSize) * boxSize,
    Math.floor(e.offsetY / boxSize) * boxSize,
    boxSize,
    boxSize
  );

  // let x = e.pageX - elemLeft;
  // let y = e.pageY - elemTop;
  //
  // console.log("elements:", elements);
  // console.log("element.top:", element.top);
  // console.log("element.height:", element.height);
  //
  // elements.forEach(elem => {
  //   // console.log("forEach called");
  //
  //   if (
  //     y > elem.top &&
  //     y < elem.top + elem.height &&
  //     x > elem.left &&
  //     x < elem.left + elem.width
  //   ) {
  //     console.log("clicked an element");
  //   }
  //   console.log("else");
  // });
}

function start(e) {
  c.fillStyle = "red";

  c.fillRect(
    Math.floor(e.offsetX / boxSize) * boxSize,
    Math.floor(e.offsetY / boxSize) * boxSize,
    boxSize,
    boxSize
  );
}
