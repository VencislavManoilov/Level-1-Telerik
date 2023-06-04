// 1. Suzdavame promenlivi
let myX = 0,vragX=900,vragY=150,vrag2X=900,vrag2Y=450,vrag3X=1000,vrag3Y=25,ninjaN=0,ninja=0,ninjaX=-100,ninjaY=400
    myY = 0;
let point = 0


function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX = 25;
    myY = myY + 1
    ninjaX=ninjaX+1
    vragX = vragX - 2;
    vrag2X = vrag2X - 3;
    vrag3X = vrag3X - 4;
    ninja=ninja+1
    sizeY=75
    if(ninja>=8){
        ninjaN=ninjaN+1
        ninja=0
    }
    if(ninjaX>875){
        ninjaX=-75
    }
    if(ninjaN>=19){
        ninjaN=0
    }
    if(vragX<-50) {
        vragX=900;
        vragY=vragY+95
        point=point+1
    }
    if(vrag2X<-75) {
        vrag2X=900
        point=point+1
        vrag2Y=vrag2Y-200
    }
    if(vrag3X<-70) {
        vrag3X=2500
        point=point+1
        vrag3Y=vrag3Y+250
    }
    if(myY>680) {
        myY=-80
    }
    if(myY<-80) {
        myY=680
    }
    if(vragY>380) {
        vragY=150
    }
    if(vrag2Y<-50) {
        vrag2Y=450
    }
    if(vrag3Y>550) {
        vrag3Y=25
    }
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(sun, vragX, vragY, 50, 50);
    drawImage(cat, vrag2X, vrag2Y, 100, 75);
    drawImage(bee, vrag3X, vrag3Y, 70, 70)
    drawImage(princess[ninjaN], ninjaX, ninjaY, 75, 100)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    myY = myY - 35
    console.log("mouseX + mouseY =", mouseX + mouseY);
    console.log("POINTS=", point)
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
