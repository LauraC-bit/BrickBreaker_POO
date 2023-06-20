"use strict";

import Circle from "./Circle.js";
import SpaceBar from "./SpaceBar.js";

const main = () => {
  let canvasDom;
  let ctx;
  let brickRowCount = 3;
  let brickColumnCount = 5;
  let brickWidth = 85;
  let brickHeight = 30;
  let brickPadding = 10;
  let brickOffsetTop = 250;
  let brickOffsetLeft = 530;

  canvasDom = document.getElementById("canvas");
  canvasDom.width = window.innerWidth;
  canvasDom.height = window.innerHeight;

  const circle = new Circle("#E9A341", 30, canvasDom.width / 2, 30);
  const spaceBar = new SpaceBar(
    "#E9A341",
    canvasDom.width / 2 - 200,
    canvasDom.height - 20,
    450,
    50
  );

  ctx = canvasDom.getContext("2d");

  let bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, isBroken: false };
    }
  }

  function display() {
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
    ctx.fillStyle = "#F8E8D1";
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    ctx.fillStyle = circle.color;

    collisionDetection();
    displayBar();
    displayCircle();
    displayText();
    drawBricks();
  }

  let ballDirection = {
    top: -1, //equivaut a --
    bottom: 1, //equivaut a ++ donc incrementer donc vers le bas puisque 0 est en haut;
    right: -1,
    left: 1,
  };

  function displayText() {
    ctx.font = "bold 28px Verdana";
    ctx.fillStyle = "#D125E6";
    ctx.fillText(
      "Press SPACE for start the game",
      canvasDom.width / 2 - 200,
      canvasDom.height / 2
    );
  }

  function displayCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.stroke();
  }

  function displayBar() {
    ctx.fillStyle = spaceBar.color;
    ctx.fillRect(spaceBar.x, spaceBar.y, spaceBar.width, spaceBar.height);
    // ctx.strokeStyle = "#000000"; tentative de contour noir
    // ctx.stroke();
  }

  function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        let b = bricks[c][r];
        if (
          b.isBroken === false &&
          circle.x > b.x &&
          circle.x < b.x + brickWidth &&
          circle.y > b.y &&
          circle.y < b.y + brickHeight
        ) {
          circle.currentDirectionVertical =
            circle.currentDirectionVertical * -1;
          bricks[c][r].isBroken = true;
        }
      }
    }
  }

  document.addEventListener("keydown", (event) => {
    spaceBar.moove(event, canvasDom);
  });

  document.addEventListener("keypress", (e) => {
    start(e);
  });

  function start(e) {
    let game_over = false;
    if (e.key === " ") {
      display();
      let moove = () => {
        game_over = circle.mooveCircle(
          ballDirection,
          spaceBar,
          canvasDom,
          display
        );
        if (game_over) return;
        // quand une fonction "return" rien de ce qui est écrit après ne se déclenche.
        window.requestAnimationFrame(moove);
      };
      moove();
    }
  }
  display();
  displayText();

  function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        if (bricks[c][r].isBroken === false) {
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#E9A341";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  drawBricks();
};

window.addEventListener("load", main);
