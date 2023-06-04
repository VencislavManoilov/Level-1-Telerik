let tipKartinka = [],
    kartinka = [],
    brKartinki = 6,
    kolkoKartinkiOtVid = [],
    pokazanaLiE = [],
    clicked1 = -1,
    clicked2 = -1,
    resetClicked = false,
    startTimer = false,
    timer = 0,
    win = false
;

for(let set=0; set<brKartinki/2; set++) {
    kolkoKartinkiOtVid[set] = 0;
}

for(let i=0; i<brKartinki; i++) {
    kartinka[i] = randomInteger(3);
    kolkoKartinkiOtVid[kartinka[i]]++;
    pokazanaLiE[i] = false;
}

tipKartinka[0] = gem[1];
tipKartinka[1] = gem[3];
tipKartinka[2] = gem[4];

function update() {
    for(let i=0; i<brKartinki; i++) {
        if(kolkoKartinkiOtVid[kartinka[i]] > 2) {
            kolkoKartinkiOtVid[kartinka[i]]--;
            kartinka[i] = randomInteger(3);
            kolkoKartinkiOtVid[kartinka[i]]++;
        }
    }

    if(resetClicked) {
        clicked1 = -1;
        clicked2 = -1;
        resetClicked = false;
    }

    if(startTimer) {
        timer++;
    }

    if(timer > 75) {
        if(clicked1 != -1 && clicked2 != -1){
            pokazanaLiE[clicked1] = false;
            pokazanaLiE[clicked2] = false;
        }

        resetClicked = true;
        startTimer = false;
        timer = 0;
    }

    let winCheck = 0;
    for(i=0; i<brKartinki; i++) {
        if(pokazanaLiE[i]) {
            winCheck++;
        }
    }

    if(winCheck >= brKartinki) {
        // for(i=0; i<brKartinki+2; i++) {
        //     kartinka[i] = randomInteger(3);
        //     kolkoKartinkiOtVid[kartinka[i]]++;
        //     pokazanaLiE[i] = false;
        // }

        // brKartinki += 2;
        // winCheck = 0;

        win = true;
    }
}

function draw() {
    if(win) {
        context.fillStyle = 'OrangeRed';
        context.font = '25px Arial';
        context.fillText("You win!!!", 350, 225);

        context.fillStyle = 'Orange';
        context.fillText("Press R to restart!!!", 300, 275);
    } else {
        for(i=0; i<brKartinki; i++) {
            if(pokazanaLiE[i]) {
                drawImage(tipKartinka[kartinka[i]], i*(800/brKartinki), 400-(800/brKartinki), 800/brKartinki, 800/brKartinki);
            } else {
                drawImage(box, i*(800/brKartinki), 400-(800/brKartinki), 800/brKartinki, 800/brKartinki);
            }
        }
    }
}

function mouseup() {
    if(clicked1 == -1 && clicked2 == -1 && !pokazanaLiE[Math.floor(mouseX / (800/brKartinki))]) {
        clicked1 = Math.floor(mouseX / (800/brKartinki));
        pokazanaLiE[clicked1] = true;
    } else if(clicked1 != Math.floor(mouseX / (800/brKartinki)) && clicked2 == -1 && !pokazanaLiE[Math.floor(mouseX / (800/brKartinki))]) {
        clicked2 = Math.floor(mouseX / (800/brKartinki));
        pokazanaLiE[clicked2] = true;

        if(kartinka[clicked1] != kartinka[clicked2]) {
            startTimer = true;
            timer = 0;
            console.log("haha");
        } else {
            resetClicked = true;
        }
    }
}

function keyup(key) {
    if(win && key == 82) {
        location.reload();
    }
}