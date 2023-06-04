// 1. Suzdavame promenlivi
let myX = 0,noteX=900,noteY=0,speed=3,bombX=900,bombY=200,jellyX=900,jellyY=400,points=0,kolona
    myY = 0;

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX=30
    noteX=noteX-speed
    bombX=bombX-speed
    jellyX=jellyX-speed
    if(mouseY>=0){
        if(mouseY<=200){
            myY=0
        }
    }
    if(mouseY>=200){
        if(mouseY<=400){
            myY=200
        }
    }
    if(mouseY>=400){
        if(mouseY<=600){
            myY=400
        }
    }
    if(noteX+150<0){
        noteX=900
        kolona=randomInteger(3)
        speed=speed+1
        if(noteY==myY){
            points=points+1
            console.log("points =", points)
        }else{
            points=points-1
            console.log("points =", points)
        }
    }
    if(bombX+150<0){
        bombX=900
    }
    if(jellyX+150<0){
        jellyX=900
    }
    if(kolona<=0){
        if(kolona>=0){
            noteY=0
            bombY=400
            jellyY=200
        }
    }
    if(kolona<=1){
        if(kolona>=1){
            noteY=200
            bombY=0
            jellyY=400
        }
    }
    if(kolona<=2){
        if(kolona>=2){
            noteY=400
            bombY=200
            jellyY=0
        }
    }
    if(speed>15){
        speed=10
    } 
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backGrass, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 130, 150);
    drawImage(note, noteX, noteY, 150, 150);
    drawImage(bomb, bombX, bombY, 150, 150);
    drawImage(jelly[0], jellyX, jellyY, 150, 150)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
