let x,y,diamanti=[],tipDiamanti=[],brTipove=6

for(x=0; x<16; x++){
    tipDiamanti[x]=[]
    for(y=0; y<12; y++){
        tipDiamanti[x][y]=randomInteger(brTipove)
    }
}

diamanti[0]=gem[1]
diamanti[1]=gem[2]
diamanti[2]=gem[3]
diamanti[3]=gem[4]
diamanti[4]=gem[5]
diamanti[5]=gem[6]

function update() {
    
}

function draw() {
    drawImage(paddle, 0, 0, 800, 600)
    for(x=0; x<16; x++){
        for(y=0; y<12; y++){
            drawImage(diamanti[tipDiamanti[x][y]], x*50, y*50, 50, 50)
        }
    }
}