let myX=100,myY=500,iztrelqLiSe=false,zaDX=0,zaDY=0,dX=0,dY=0,startDX=0,startDY=0,kydeEmouseX=(startDX-mouseX)/10,kydeEmouseY=(startDY-mouseY)/10,natisnalLiSym=false

function update() {
    if(iztrelqLiSe==true){
        myX=myX+dX
        myY=myY+dY
        
        dX=dX/1.01
        dY=dY+0.1
    }
    
    if(natisnalLiSym==true){
        kydeEmouseX=(startDX-mouseX)/10
        kydeEmouseY=(startDY-mouseY)/10
    }
}

function draw() {
    drawImage(backDesert, 0, 0, 800, 600)
    if(natisnalLiSym==true){
        drawLine(startDX, startDY, mouseX, mouseY)
        for(ib=0; ib<=30; ib=ib+1){
            drawImage(ballOrTree, myX+7.5+ib*kydeEmouseX, myY+7.5+ib*kydeEmouseY, 5, 5)
        }
    }
    drawImage(box, myX, myY, 20, 20)
}

function mousedown() {
    //if(mouseX>myX && mouseX<myX+20 && mouseY>myY && mouseY<myY+20){
        startDX=mouseX
        startDY=mouseY
        natisnalLiSym=true
    //}
}

function mouseup() {
    zaDX=mouseX
    zaDY=mouseY
    
    dX=(startDX-zaDX)/10
    dY=(startDY-zaDY)/10
    
    iztrelqLiSe=true
    natisnalLiSym=false
}