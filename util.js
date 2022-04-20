// Canvas 2D Graphics
let cnv = document.getElementById("theCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1100;
cnv.height = 850;




let x = 100;
let y = 100;
let leftMove = false;
let rightMove = false;
let downMove = false;
let upMove = false;
let speed = 5.5;
requestAnimationFrame(draw);

function draw() {


    // UPDATE ELEMENTS ON CANVAS

    // DEATH



    // Animate Movement
    if (rightMove) {
        x += speed;
    }
    if (upMove) {
        y -= speed;
    }
    if (downMove) {
        y += speed;
    }
    if (leftMove) {
        x -= speed;
    }

    // Border Stop
    if (y < 0) {
        y = 0;
    } else if (cnv.height <= y + 50) {
        y = cnv.height - 50;
    }
    if (x < 0) {
        x = 0;
    } else if (cnv.width <= x + 50) {
        x = cnv.width - 50;
    }


    // DRAW CANVAS
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // DRAW MAZE1
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, 200, 200);

    // DRAW MAZE2
    ctx.fillStyle = "red"
    ctx.fillRect(200, 70, 300, 70);

    // DRAW MAZE3
    ctx.fillStyle = "red"
    ctx.fillRect(500, 0, 70, 140);

    // DRAW MAZE4
    ctx.fillStyle = "red"
    ctx.fillRect(570, 0, 700, 70);

    // DRAW MAZE5
    ctx.fillStyle = "red"
    ctx.fillRect(700, 70, 70, 160);

    // DRAW MAZE6
    ctx.fillStyle = "red"
    ctx.fillRect(770, 160, 110, 70);

    // DRAW MAZE7
    ctx.fillStyle = "red"
    ctx.fillRect(880, 70, 70, 210);

    // DRAW PLAYER
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 50, 50);




    // REQUEST ANIMATION FRAMEw
    requestAnimationFrame(draw);
}

// Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

//console.log(event)
function keydownHandler(event) {

    if (event.code === "KeyD") {
        rightMove = true;
    } else if (event.code === "KeyW") {
        upMove = true;
    } else if (event.code === "KeyS") {
        downMove = true;
    } else if (event.code === "KeyA") {
        leftMove = true;
    }
}

function keyupHandler(event) {
    if (event.code === "KeyD") {
        rightMove = false;
    } else if (event.code === "KeyW") {
        upMove = false;
    } else if (event.code === "KeyS") {
        downMove = false;
    } else if (event.code === "KeyA") {
        leftMove = false;
    }
}