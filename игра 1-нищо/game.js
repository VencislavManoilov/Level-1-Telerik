// 1. Suzdavame promenlivi
let myX = 0,
    myY = 0;

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(zombie, 200, 440, 100, 100);
    drawImage(tank[5], 50, 400,100, 80);
    drawImage(star, 700, 360, 100, 100);
    drawImage(spy[3], 500, 440, 100, 100);
    drawImage(enemyBlack1, 50, 0, 100, 100);
    drawImage(enemyBlue1, 200, 0, 100, 100);
    drawImage(enemyRed1, 500, 0, 100, 100);
    drawImage(motorBlack, 73, 200, 55, 105);
    drawImage(motorBlue, 223, 220, 55, 105);
    drawImage(motorRed, 523, 150, 55, 105)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
