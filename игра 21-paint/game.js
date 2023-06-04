let svetiLi=[],x,y,natisnalLiSym=false,sveti,brSvetesti=0,minatoX=[],minatoY=[],minaliupdati=0,rubber=false,sx,sy,sSvetiLi=[]

for(x=0; x<=2000; x=x+1){
    svetiLi[x]=[]
    for(y=0; y<=800; y=y+1){
        svetiLi[x][y]=false
    }
}

for(sx=0; sx<=2000; sx=sx+1){
    sSvetiLi[sx]=[]
    for(sy=0; sy<=2000; sy=sy+1){
        sSvetiLi[sx][sy]=false
    }
}

function update() {
    if(natisnalLiSym){
        if(rubber){
            
        }else{
            for(x=mouseX; x<=mouseX+1; x=x+1){
                for(y=mouseY; y<=mouseY+1; y=y+1){
                    svetiLi[x][y]=true
                }
            }
        }
    }
}

function draw() {
    for(x=0; x<=2000; x=x+1){
        for(y=0; y<=800; y=y+1){
            if(svetiLi[x][y]){
                drawLine(x, y, x+1, y+1)
            }
        }
    }
    drawImage(box, 0, 600, 50, 50)
    drawImage(laserRed[2], 75, 600, 50, 50)
}

function mousedown() {
    natisnalLiSym=true
    minaliupdati=0
}

function mouseup() {
    natisnalLiSym=false
    
    if(areColliding( 0, 600, 50, 50,  mouseX, mouseY, 1, 1)){
        if(rubber){
            rubber=false
        }else{
            rubber=true
        }
    }
    if(areColliding( 75, 600, 50, 50,  mouseX, mouseY, 1, 1)){
        brSvetesti=0
    }
}

