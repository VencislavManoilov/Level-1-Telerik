let brBlockove=10, blockX=[], blockY=[], clicked=false, cliknatKvadrat, starCliknatKvadrat, imaliBlock=[], ;

for(let j=0; j<brBlockove; j++){
    blockX[j]=100 + j*50;
    blockY[j]=400;
}

for(x=0; x<brBlockove; x++){
    imaliBlock[x]=[]
    for(y=0; y<brBlockove; y++){
        imaliBlock[x][y]=false
    }
}

function update() {
    if(clicked){
        for(j=0; j<brBlockove; j++){
            if(areColliding( blockX[j], blockY[j], 35, 35,  mouseX, mouseY, 1, 1)){
                starCliknatKvadrat=j;
                if(starCliknatKvadrat==cliknatKvadrat){
                    blockX[j]=mouseX-17.5;
                    blockY[j]=mouseY-17.5;
                }
                cliknatKvadrat=j;
            }
        }
    }
}

function draw() {
    for(x=0; x<=10; x++){
        for(y=0; y<=10; y++){
            context.strokeRect(x*35, y*35, 35, 35);
        }
    }

    for(j=0; j<brBlockove; j++){
        context.fillStyle = 'lime';
        context.fillRect(blockX[j], blockY[j], 35, 35);
    }
}

function mousedown() {
    clicked=true;
}

function mouseup() {
    for(j=0; j<brBlockove; j++){
        if(areColliding( blockX[j], blockY[j], 35, 35,  mouseX, mouseY, 1, 1)){
            if(mouseX<400 && mouseY<400){
                blockX[j]=Math.floor(mouseX/35)*35;
                blockY[j]=Math.floor(mouseY/35)*35;
                for(x=0; x<=10; x++){
                    for(y=0; y<=10; y++){
                        if(areColliding( blockX[i], blockY[i], 35, 35,  x*35, y*35, 35, 35)){
                            imaliBlock[x][y]=false
                        }
                    }
                }
            }
        }
    }

    clicked=false;
}