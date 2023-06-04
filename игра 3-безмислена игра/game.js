// 1. Suzdavame promenlivi
let myX = 0,vragX=750,vragY=150,vrag2X=950,vrag2Y=450,vrag3X=750,vrag3Y=25
    myY = 0;


function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX = 25;
    myY = myY + 1
    vragX = vragX - 2;
    vrag2X = vrag2X - 1;
    vrag3X = vrag3X - 1
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    console.log(vragX,vragY);
    drawImage(sun, vragX, vragY, 50, 50);
    console.log(vrag2X,vrag2Y);
    drawImage(cat, vrag2X, vrag2Y, 100, 75);
    console.log(vrag3X,vrag3Y);
    drawImage(bee, vrag3X, vrag3Y, 70, 70)
}

function keyup (key) {
    // Pechatai koda na natisnatiq klavish
    myY = myY - 35
    console.log("mouseX + mouseY =", mouseX + mouseY);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
