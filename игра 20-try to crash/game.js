let kolaX=[],kolaY=[],brKoli=0,kolaPosoka=[],start=true,kolaSizeX=[],kolaSizeY=[]

function update() {
    for(ik=0; ik<=brKoli; ik=ik+1){
        if(kolaPosoka[ik]==1){
            kolaY[ik]=kolaY[ik]-6
            
            if(kolaY[ik]<-70){
                kolaY[ik]=600
            }
        }else{
            kolaX[ik]=kolaX[ik]+6
            
            if(kolaX[ik]>600){
                kolaX[ik]=-70
            }
        }
        
        if(areColliding( kolaX[brKoli-ik-1],kolaY[brKoli-ik-1],kolaSizeX[brKoli-ik-1],kolaSizeY[brKoli-ik-1],kolaX[brKoli],kolaY[brKoli],kolaSizeX[brKoli],kolaSizeX[brKoli])){
            console.log("fras")
            brKoli=brKoli-1
            kolaX[brKoli-ik]=kolaX[brKoli]
            kolaY[brKoli-ik]=kolaY[brKoli]
            brKoli=brKoli-1
        }
    }
}

function draw() {
    drawImage(backClouds, 0, 0, 600, 600)
    for(ik=0; ik<=brKoli; ik=ik+1){
        if(kolaPosoka[ik]==1){
            drawImage(missile[5], kolaX[ik], kolaY[ik], kolaSizeX[ik], kolaSizeY[ik])
        }else{
            drawImage(planeGreen, kolaX[ik], kolaY[ik], kolaSizeX[ik], kolaSizeY[ik])
        }
    }
}

function mouseup() {
    brKoli=brKoli+1
    
    if(start==true){
        kolaPosoka[brKoli-1]=2
        start=false
    }
    
    if(kolaPosoka[brKoli-1]==1){
        kolaPosoka[brKoli]=2
    }else{
        kolaPosoka[brKoli]=1
    }
    
    if(kolaPosoka[brKoli]==1){
        kolaX[brKoli]=mouseX-20
        kolaY[brKoli]=600
        kolaSizeX[brKoli]=40
        kolaSizeY[brKoli]=70
    }else{
        kolaX[brKoli]=-40
        kolaY[brKoli]=mouseY-35
        kolaSizeX[brKoli]=70
        kolaSizeY[brKoli]=70
    }
}