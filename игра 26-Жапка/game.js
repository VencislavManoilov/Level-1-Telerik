let brKamani = 6,kamakX=[],kamakY=[],myX=1,myY=90,chislo=[],skokLiSym=false;

let brTochki=0
for(let i=0; i<brKamani; i++){
    chislo[i]=randomInteger(25)-randomInteger(25)
}

function update() {
    for(i=0; i<brKamani; i++){
        if(skokLiSym) {
            if(i<brKamani){
                let tekushtKamak=0
                if(chislo[tekushtKamak]>chislo[tekushtKamak+1]){
                    brTochki+=chislo[tekushtKamak]
                    tekushtKamak++
                    skokLiSym=false
                }
                if(chislo[tekushtKamak]<chislo[tekushtKamak+1]){
                    brTochki+=chislo[tekushtKamak+1]
                    tekushtKamak+=2
                    skokLiSym=false
                }
            }
        }
    }
}

function draw() {
    drawImage(paddle, 18, 200, 50, 50)

    for(i=0; i<brKamani; i++){
        drawImage(groundStone, i*100+100, 200, 75, 50)

        context.fillStyle='black'
        context.font='20px Arial'
        context.fillText(chislo[i], i*100+130, 185)
    }

    context.fillStyle='green'
    context.font='20px Arial'
    context.fillText("Жапка", myX+20, myY)

    context.fillStyle='black'
    context.font='20px Arial'
    context.fillText(brTochki, myX+20, myY+200)

    drawImage(zombie, myX, myY)
}

function keyup(key) {
    if(key==32){
        skokLiSym=true
    }
}