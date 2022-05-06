// Canvas 2D Graphics
let cnv = document.getElementById("theCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1100;
cnv.height = 850;

let x = 340;
let y = 600;
let leftMove = false;
let rightMove = false;
let downMove = false;
let upMove = false;
let speed = 5.5;
let playerColor = "yellow"
let fin = false;
let fin2 = false;
let fin3 = false;
let spikes = false;

let num = 1;
while (num <= 5000) {
    console.log("Spikes");
    num++;
}

if (num <= 5000) {
    spikes = true;
} else {
    spikes = false
}

requestAnimationFrame(draw);

function draw() {

    // UPDATE ELEMENTS ON CANVAS

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
    } else if (cnv.width < x + 50) {
        x = cnv.width - 50;
    }

    // DRAW CANVAS
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Start 1
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, 150, 150);

    // Start 2
    ctx.fillStyle = "red"
    ctx.fillRect(0, 850, 150, -150);

    // Start 3
    ctx.fillStyle = "green"
    ctx.fillRect(1100, 850, -150, -150);

    // Fin
    if (x < 1100 && x + 50 > 950 && y < 850 && y + 50 > 700) {
        fin = true;
    }
    if (fin) {
        ctx.fillStyle = "green"
        ctx.fillRect(0, 0, 150, 150);
        ctx.fillStyle = "red"
        ctx.fillRect(1100, 850, -150, -150);
        ctx.fillStyle = "red"
        ctx.fillRect(0, 850, 150, -150);
    }

    if (fin && x < 150 && x + 50 > 0 && y < 150 && y + 50 > 0) {
        fin2 = true;
    }
    if (fin2) {
        ctx.fillStyle = "red"
        ctx.fillRect(0, 0, 150, 150);
        ctx.fillStyle = "green"
        ctx.fillRect(0, 850, 150, -150);
        ctx.fillStyle = "red"
        ctx.fillRect(1100, 850, -150, -150);
        fin = false;
    }

    if (fin2 && x < 150 && x + 50 > 0 && y < 850 && y + 50 > 700) {
        fin3 = true;
    }

    if (fin3) {
        cnv.width = 50;
        cnv.height = 50;
    }

    // DRAW MAZE1
    ctx.fillStyle = "red"
    ctx.fillRect(150, 70, 350, 70);

    // DRAW MAZE2
    ctx.fillStyle = "red"
    ctx.fillRect(500, 0, 70, 140);

    // DRAW MAZE3
    ctx.fillStyle = "red"
    ctx.fillRect(570, 0, 700, 70);

    // DRAW MAZE4
    ctx.fillStyle = "red"
    ctx.fillRect(700, 70, 70, 160);

    // DRAW MAZE5
    ctx.fillStyle = "red"
    ctx.fillRect(770, 160, 110, 70);

    // DRAW MAZE6
    ctx.fillStyle = "red"
    ctx.fillRect(880, 70, 70, 160);

    // DRAW MAZE 7
    ctx.fillStyle = "red"
    ctx.fillRect(1030, 70, 70, 600);

    // DRAW MAZE 8
    ctx.fillStyle = "red"
    ctx.fillRect(790, 230, 70, 200);

    // DRAW MAZE 9
    ctx.fillStyle = "red"
    ctx.fillRect(790, 430, 240, 70);

    // DRAW MAZE 10
    ctx.fillStyle = "red"
    ctx.fillRect(310, 600, 70, 250);

    // DRAW MAZE 11
    ctx.fillStyle = "red"
    ctx.fillRect(380, 780, 200, 70);

    // DRAW MAZE 12
    ctx.fillStyle = "red"
    ctx.fillRect(510, 710, 70, 70);

    // DRAW MAZE 13
    ctx.fillStyle = "red"
    ctx.fillRect(580, 710, 140, 70);

    // DRAW MAZE 14
    ctx.fillStyle = "red"
    ctx.fillRect(650, 780, 70, 70);

    // DRAW MAZE 15
    ctx.fillStyle = "red"
    ctx.fillRect(720, 780, 140, 70);

    // DRAW MAZE 16
    ctx.fillStyle = "red"
    ctx.fillRect(790, 710, 160, 70);

    // DRAW MAZE 17
    ctx.fillStyle = "red"
    ctx.fillRect(25, 150, 70, 250);

    // DRAW MAZE 18
    ctx.fillStyle = "red"
    ctx.fillRect(95, 330, 260, 70);

    // DRAW MAZE 19
    ctx.fillStyle = "red"
    ctx.fillRect(520, 330, 270, 70);

    // DRAW MAZE 20
    ctx.fillStyle = "red"
    ctx.fillRect(400, 450, 70, 150);

    // DRAW MAZE 21
    ctx.fillStyle = "red"
    ctx.fillRect(310, 530, 90, 70);

    // DRAW MAZE 22
    ctx.fillStyle = "red"
    ctx.fillRect(310, 600, -400, 70);

    // DRAW MAZE 23
    ctx.fillStyle = "red"
    ctx.fillRect(30, 670, 80, 30);

    // DRAW RIVER
    ctx.fillStyle = "blue"
    ctx.fillRect(1030, 600, -650, 70);

    // DRAW QUICK SAND 
    ctx.fillStyle = "#C2B280"
    ctx.fillRect(350, 300, 170, 150);

    ctx.fillStyle = "#B0A276"
    ctx.fillRect(430, 370, 10, 10);

    // SPIKES
    if (spikes) {
        ctx.fillStyle = "grey"
        ctx.fillRect(20, 620, 30, 30);

        ctx.beginPath()
        ctx.moveTo(20, 620);
        ctx.lineTo(50, 650);
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(20, 650);
        ctx.lineTo(50, 620);
        ctx.stroke();

        ctx.fillStyle = "grey"
        ctx.fillRect(100, 620, 30, 30);

        ctx.beginPath()
        ctx.moveTo(100, 620);
        ctx.lineTo(130, 650);
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(100, 650);
        ctx.lineTo(130, 620);
        ctx.stroke();

        ctx.fillStyle = "grey"
        ctx.fillRect(180, 620, 30, 30);

        ctx.beginPath()
        ctx.moveTo(180, 620);
        ctx.lineTo(210, 650);
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(180, 650);
        ctx.lineTo(210, 620);
        ctx.stroke();

        ctx.fillStyle = "grey"
        ctx.fillRect(260, 620, 30, 30);

        ctx.beginPath()
        ctx.moveTo(260, 620);
        ctx.lineTo(290, 650);
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(260, 650);
        ctx.lineTo(290, 620);
        ctx.stroke();
    }


    if (spikes && x < 290 && x + 50 > 0 && y < 670 && y + 50 > 600) {
        x = 50;
        y = 50;
    }

    // DEATH
    if (x < 500 && x + 50 > 150 && y < 70 && y + 50 > 0) {
        x = 50;
        y = 50;
    } else if (x < 880 && x + 50 > 770 && y < 160 && y + 50 > 70) {
        x = 50;
        y = 50;
        fin = false;
    } else if (x < 1030 && x + 50 > 860 && y < 430 && y + 50 > 230) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 1030 && x + 50 > 950 && y < 230 && y + 50 > 70) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 440 && x + 50 > 430 && y < 380 && y + 50 > 370) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 700 && x + 50 > 570 && y < 140 && y + 50 > 70) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 700 && x + 50 > 150 && y < 150 && y + 50 > 140) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 350 && x + 50 > 95 && y < 330 && y + 50 > 150) {
        x = 50;
        y = 50;
        fin = false;
    } else if (x < 520 && x + 50 > 350 && y < 300 && y + 50 > 150) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 700 && x + 50 > 520 && y < 330 && y + 50 > 150) {
        x = 50;
        y = 50;
        fin = false;
    } else if (x < 790 && x + 50 > 700 && y < 330 && y + 50 > 230) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 25 && x + 50 > 0 && y < 400 && y + 50 > 150) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 400 && x + 50 > 350 && y < 530 && y + 50 > 450) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 350 && x + 50 > 310 && y < 530 && y + 50 > 400) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 310 && x + 50 > 0 && y < 600 && y + 50 > 400) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 520 && x + 50 > 470 && y < 600 && y + 50 > 450) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 790 && x + 50 > 520 && y < 600 && y + 50 > 400) {
        x = 50;
        y = 50;
        fin = false;
    } else if (x < 1030 && x + 50 > 790 && y < 600 && y + 50 > 500) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 30 && x + 50 > 0 && y < 700 && y + 50 > 670) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 310 && x + 50 > 110 && y < 700 && y + 50 > 670) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 310 && x + 50 > 150 && y < 850 && y + 50 > 700) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 1100 && x + 50 > 380 && y < 700 && y + 50 > 670) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 950 && x + 50 > 380 && y < 710 && y + 50 > 700) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 790 && x + 50 > 720 && y < 780 && y + 50 > 710) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 510 && x + 50 > 380 && y < 780 && y + 50 > 710) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 510 && x + 50 > 380 && y < 780 && y + 50 > 710) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 650 && x + 50 > 580 && y < 850 && y + 50 > 780) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    } else if (x < 950 && x + 50 > 860 && y < 850 && y + 50 > 780) {
        x = 50;
        y = 50;
        fin = false;
        fin2 = false;
    }

    // River
    if (x < 1030 && x + 50 > 380 && y < 670 && y + 50 > 600) {
        x -= speed;
        leftMove = false;
        rightMove = false;
        downMove = false;
        upMove = false;
    }

    // Quick Sand
    if (x < 420 && x + 50 > 350 && y < 450 && y + 50 > 300) {
        x++;
    }

    if (x < 520 && x + 50 > 450 && y < 450 && y + 50 > 300) {
        x--;
    }

    if (x < 450 && x + 50 > 420 && y < 360 && y + 50 > 300) {
        y++;
    }

    if (x < 450 && x + 50 > 420 && y < 450 && y + 50 > 390) {
        y--;
    }

    if (x < 520 && x + 50 > 350 && y < 450 && y + 50 > 300) {
        speed = 1.5;
    } else {
        speed = 5.5;
    }

    // DRAW PLAYER
    ctx.fillStyle = playerColor;
    ctx.fillRect(x, y, 50, 50);

    // REQUEST ANIMATION FRAME
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