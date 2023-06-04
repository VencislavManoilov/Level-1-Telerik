let myX=30,myY=0,gameMod=4,dY=0,vragX=800,vragY=randomInteger(530),up=false,jump=false,forjump=0,realjump=false,startgamemod5=false,live=3,heartX=0,heartX2=50,heartX3=100,laserX=-1000,dead=false,points=0,paddlesizeX=live*50,brPatroni=0,patronX=[],patronY=[]

function update(){
    vragX=vragX-3
    
    if(myY<0){
        myY=0
        myX=30
        dY=0
    }if(myY>520){
        myY=520
        myX=20
        dY=0
        forjump=0
    }
    
    if(gameMod==1){
        myY=myY+2
    }
    
    if(gameMod==2){
        if(isKeyPressed[32]){
            myY=myY-3
        }else{
            myY=myY+3
        }
    }
    
    if(gameMod==3){
        if(up==false){
            myY=myY+3
        }else{
            myY=myY-3
        }
    }
    
    if(gameMod==4){
        if(jump==false){
            dY=dY+0.05
            myY=myY+dY
            realjump=false
        }if(jump==true){
            if(realjump==false){
                dY=0
                realjump=true
            }
            dY=dY-0.4
            myY=myY+dY
            if(dY<-4){
                jump=false
            }
        }
        if(myY<0){
            myY=0
            dY=0
            jump=false
        }
    }
    
    if(gameMod==5){
        if(isKeyPressed[32]){
            if(startgamemod5==false){
                dY=-3
                startgamemod5=true
            }
            myY=myY+dY
            dY=dY+0.01
        }else{
            myY=myY+dY
            dY=dY+0.05
            startgamemod5=false
        }
    }else{
        startgamemod5=false
    }
    
    if(live<=3){
        paddlesizeX = paddlesizeX + (live*50 - paddlesizeX) / 30
    }
    
    if(live<1){
        laserX=100
        myX=-1000
        vragX=-1000
        paddlesizeX=0
        if(dead==false){
            console.log("Press R to restart")
            dead=true
        }
    }
    if(live>0){
        laserX=-1000
        dead=false
        if(vragX<-80){
            vragX=800
            vragY=randomInteger(530)
            points=points+1
            console.log(points, "points")
        }
    }
    
    if(live>3){
        live=3
    }
    
    if(areColliding( myX, myY, 60, 80,  vragX, vragY, 80, 80)){
        vragX=800
        vragY=randomInteger(520)
        live=live-1
    }
    
    for(ip=0; ip<=brPatroni; ip=ip+1){
        patronX[ip]=patronX[ip]+8
    }
    
    for(ip=0; ip<=brPatroni; ip=ip+1){
        if(areColliding( vragX, vragY, 80, 80,  patronX[ip], patronY[ip], 30, 10)){
            vragX=800
            vragY=randomInteger(520)
        }
    }
    
    if(brPatroni<0){
        brPatroni=0
    }
}

function draw(){
    drawImage(backDesert, 0, 0, 800, 600)
    for(ip=0; ip<=brPatroni; ip=ip+1){
        drawImage(powerupBlue, patronX[ip], patronY[ip], 30, 10)
    }
    if(myY>520){
        drawImage(femaleStand, myX, myY, 60, 80)
    }else{
        if(gameMod>3 && gameMod<=5){
            if(dY>0){
                drawImage(femaleWalk1, myX, myY, 60, 80)
            }if(dY<=0){
                drawImage(femaleJump, myX, myY, 60, 80)
            }
        }else{
            drawImage(femaleAction, myX, myY, 60, 80)
        }
    }
    for(ibp=0; ibp<=11-brPatroni; ibp=ibp+1){
        drawImage(paddle, 760, 580-ibp*12, 30, 10)
    }
    drawImage(laserRed[2], laserX, 0, 600, 600)
    drawImage(boxItem, 570, 555, 160, 30)
    drawImage(paddle, 575, 560, paddlesizeX, 20)
    drawImage(sun, vragX, vragY, 80, 80)
}

function keyup(key){
    
    //console.log("Pressed", key)
    
    if(key==49){
        gameMod=1
    }if(key==50){
        gameMod=2
    }if(key==51){
        gameMod=3
    }if(key==52){
        gameMod=4
    }if(key==53){
        gameMod=5
    }
    
    if(gameMod==1){
        if(key==32){
            myY=myY-75
        }
    }
    
    if(gameMod==3){
        if(key==32){
            if(up==false){
                up=true
            }else{
                up=false
            }
        }
    }
    
    if(gameMod==4){
        if(key==32){
            if(forjump<2){
                jump=true
                forjump=forjump+1
            }
        }
    }
    
    if(live<1){
        if(key==82){
            live=3
            myX=30
            myY=0
            points=0
            brPatroni=0
        }
    }
    
    if(key==69){
        if(brPatroni>=12){
            brPatroni=0
        }
    }
}

function mouseup() {
    if(brPatroni<12){
       brPatroni=brPatroni+1
        patronX[brPatroni]=myX+10
        patronY[brPatroni]=myY+40
    }
}