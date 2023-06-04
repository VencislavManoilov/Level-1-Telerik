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
    drawImage(box, 350, 100, 55, 55);
    drawImage(box, 215, 165, 325, 25);
    drawImage(box, 328, 155, 100, 175);
    drawImage(box, 328, 325, 25, 175);
    drawImage(box, 403, 325, 25, 175)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
