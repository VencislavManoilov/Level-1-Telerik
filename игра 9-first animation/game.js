// 1. Suzdavame promenlivi
let princessX=-60,princessY=200,number=0,time=0,second,hour,ninjaN=0,ninja=0,ninjaX=-100,ninjaY=400

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    time=time+1
    ninjaX=ninjaX+1
    ninja=ninja+1
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
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600);
    drawImage(princess[ninjaN], ninjaX, ninjaY, 75, 100)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
