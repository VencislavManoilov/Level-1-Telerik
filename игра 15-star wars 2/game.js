let myX = 360, myY = 500,vragX=[],vragY=[],brVragove=0,iv,patronX=[],patronY=[],brPatroni=0,dX=0,tap=false,patronips=8,gamemode=1,ipp,ippatron,temputer=0,red=false,imp,brMegaBomb=0,megaBombX=[],megaBombY=[],megaBombTimer=0,nextBomb=false,whereExplode=0,megaExplosion=false,ie,razst=0,whereToExplodeX,whereToExplodeY,brPatroniNaGore=0,brPatroniNaDqsno=0,brPatroniNaLqvo=0,patronNaGoreX=[],patronNaGoreY=[],patronNaDqsnoX=[],patronNaDqsnoY=[],patronNaLqvoX=[],patronNaLqvoY=[],ipg,ipd,ipl,whereToFire=0

function update(){
    
    if(isKeyPressed[65] || isKeyPressed[37]){
        dX=dX-0.70
    }
    
    if(isKeyPressed[68] || isKeyPressed[39]){
        dX=dX+0.70
    }
    
    myX=myX+dX
    dX=dX/1.1
    
    if(myX<0){
        myX=0
        dX=0
    }if(myX>720){
        myX=720
        dX=0
    }
    
    brVragove=brVragove+1
    vragX[brVragove]=randomInteger(780)
    vragY[brVragove]=-20
    
    for(iv=0; iv<=brVragove; iv=iv+1){
        vragY[iv]=vragY[iv]+1
        for(ip=0; ip<=brPatroni; ip=ip+1){
            if(areColliding( vragX[iv], vragY[iv], 20, 20,  patronX[ip], patronY[ip], 35, 30)){
                vragX[iv]=vragX[brVragove]
                vragY[iv]=vragY[brVragove]
                brVragove=brVragove-1
            }
        }
    }
    
    for(ip=0; ip<=brPatroni; ip=ip+1){
        patronY[ip]=patronY[ip]-8;
    }
    
    if(tap==true){
        patronips=patronips+1
        temputer=temputer+0.25
        if(patronips>=8){
            brPatroni=brPatroni+1
            patronX[brPatroni]=myX+20
            patronY[brPatroni]=myY+10
            patronips=0
        }
    }else{
        patronips=10
        temputer=temputer-0.1
    }
    
    if(temputer<0){
        temputer=0
    }if(temputer>100){
        temputer=100
        if(tap==true){
            red=true
        }
    }
    
    if(red==true){
        tap=false
    }
    
    for(imp=0; imp<=brMegaBomb; imp=imp+1){
        megaBombY[imp]=megaBombY[imp]-5
        for(iv=0; iv<=brVragove; iv=iv+1){
            if(areColliding( megaBombX[imp], megaBombY[imp], 60, 60,  vragX[iv], vragY[iv], 20, 20)){
                whereExplode=whereExplode+1
                vragX[iv]=vragX[brVragove]
                vragY[iv]=vragY[brVragove]
                brVragove=brVragove-1
            }
        }
        if(whereExplode>30){
            megaExplosion=true
            whereToExplodeX=megaBombX[imp]
            whereToExplodeY=megaBombY[imp]
            megaBombX[imp]=-1000
            whereExplode=0
        }
    }
    
    if(nextBomb==true){
        megaBombTimer=megaBombTimer-0.25
    }
    
    if(megaBombTimer<0){
        megaBombTimer=0
        nextBomb=false
    }
    if(megaExplosion==true){
        razst=razst+2
    }else{
        razst=0
    }
    
    for(xs=-8; xs<=8; xs=xs+1){
        for(ys=-8; ys<=8; ys=ys+1){
            for(iv=0; iv<=brVragove; iv=iv+1){
                if(areColliding( whereToExplodeX+razst*xs, whereToExplodeY+razst*ys, 9, 9,  vragX[iv], vragY[iv], 20, 20)){
                    if(xs==0 || ys==0 || xs==ys || xs+ys==0){
                        if(xs==0 && ys==0){
                            
                        }else{
                            vragX[iv]=vragX[brVragove]
                            vragY[iv]=vragY[brVragove]
                            brVragove=brVragove-1
                        }
                    }
                }
            }
        }
    }
    
    for(ipg=0; ipg<=brPatroniNaGore; ipg=ipg+1){
        patronNaGoreY[ipg]=patronNaGoreY[ipg]-5
    }
    
    for(ipg=0; ipg<=brPatroniNaGore; ipg=ipg+1){
        for(iv=0; iv<=brVragove; iv=iv+1){
            if(areColliding( vragX[iv], vragY[iv], 20, 20,  patronNaGoreX[ipg], patronNaGoreY[ipg], 25, 40)){
                vragX[iv]=vragX[brVragove]
                vragY[iv]=vragY[brVragove]
                brVragove=brVragove-1
            }
        }
    }
    
    for(ipd=0; ipd<=brPatroniNaDqsno; ipd=ipd+1){
        patronNaDqsnoY[ipd]=patronNaDqsnoY[ipd]-5
        patronNaDqsnoX[ipd]=patronNaDqsnoX[ipd]+1
    }
    
    for(ipd=0; ipd<=brPatroniNaDqsno; ipd=ipd+1){
        for(iv=0; iv<=brVragove; iv=iv+1){
            if(areColliding( vragX[iv], vragY[iv], 20, 20,  patronNaDqsnoX[ipd], patronNaDqsnoY[ipd], 25, 40)){
                vragX[iv]=vragX[brVragove]
                vragY[iv]=vragY[brVragove]
                brVragove=brVragove-1
            }
        }
    }
    
    for(ipl=0; ipl<=brPatroniNaLqvo; ipl=ipl+1){
        patronNaLqvoY[ipl]=patronNaLqvoY[ipl]-5
        patronNaLqvoX[ipl]=patronNaLqvoX[ipl]-1
    }
    
    for(ipl=0; ipl<=brPatroniNaLqvo; ipl=ipl+1){
        for(iv=0; iv<=brVragove; iv=iv+1){
            if(areColliding( vragX[iv], vragY[iv], 20, 20,  patronNaLqvoX[ipl], patronNaLqvoY[ipl], 25, 40)){
                vragX[iv]=vragX[brVragove]
                vragY[iv]=vragY[brVragove]
                brVragove=brVragove-1
            }
        }
    }
    
    whereToFire=whereToFire-2.5
    
    if(whereToFire<0){
        whereToFire=0
    }
    
    for(iv=0; iv<=brVragove; iv=iv+1){
        if(vragY[iv]>600){
            vragX[iv]=vragX[brVragove]
            vragY[iv]=vragY[brVragove]
            brVragove=brVragove-1
        }
    } 
}


function draw() {
    
    drawImage(backStars, 0, 0, 800, 600)
    
    for(iv=0; iv<=brVragove; iv=iv+1){
        drawImage(box, vragX[iv], vragY[iv], 20, 20)
    }  
    for(ip=0; ip<=brPatroni; ip=ip+1){
        drawImage(missile[1], patronX[ip], patronY[ip], 35, 25)
    }
    if(gamemode==1){
        for(ipp=0; ipp<=7-brPatroni; ipp=ipp+1){
            drawImage(paddle, 760, 580-ipp*12, 30, 10)
        }
        drawImage(missile[1], 10, 565, 35, 25)
    }if(gamemode==2){
        for(ippatron=0; ippatron<3; ippatron=ippatron+1){
            drawImage(missile[1], 10+ippatron*10, 565, 35, 25)
        }
        if(temputer<=50){
            drawImage(powerupGreen, 70, 560, temputer*2, 30)
            red=false
        }if(temputer>50 && temputer<=80){
            drawImage(powerupYellow, 70, 560, temputer*2, 30)
        }if(temputer>80){
            drawImage(powerupRed, 70, 560, temputer*2, 30)
        }
    }if(gamemode==3){
        drawImage(missile[6], 10, 530, 60, 60)
        drawImage(powerupGreen, 80, 560, megaBombTimer*2, 30)
    }
    
    for(imp=0; imp<=brMegaBomb; imp=imp+1){
        drawImage(missile[6], megaBombX[imp], megaBombY[imp], 60, 60)
    }
    
    for(ipg=0; ipg<=brPatroniNaGore; ipg=ipg+1){
        drawImage(missile[5], patronNaGoreX[ipg], patronNaGoreY[ipg], 25, 40)
    }
    
    for(ipd=0; ipd<=brPatroniNaDqsno; ipd=ipd+1){
        drawImage(missile[5], patronNaDqsnoX[ipd], patronNaDqsnoY[ipd], 10, 40)
    }
    
    for(ipl=0; ipl<=brPatroniNaLqvo; ipl=ipl+1){
        drawImage(missile[5], patronNaLqvoX[ipl], patronNaLqvoY[ipl], 10, 40)
    }
    
    if(gamemode==4){
        drawImage(missile[5], 10, 550, 10, 40)
        drawImage(missile[5], 80, 550, 10, 40)
        drawImage(missile[5], 35, 525, 25, 40)
        drawImage(powerupGreen, 100, 560, whereToFire*2, 30)
    }
    
    if(megaExplosion==true){
        for(xs=-8; xs<=8; xs=xs+1){
            for(ys=-8; ys<=8; ys=ys+1){
                if(xs==0 || ys==0 || xs==ys || xs+ys==0){
                    if(xs==0 && ys==0){

                    }else{
                        for(imp=0; imp<=brMegaBomb; imp=imp+1){
                            drawImage(paddle, whereToExplodeX+razst*xs, whereToExplodeY+razst*ys, 9, 9)
                        }
                    }
                }
            }
        }
    }
    drawImage(playerShip2_blue, myX, myY, 80, 80)
}

function keydown(key) {
    
    //console.log("Pressed", key);
    
    if(key==49){
        gamemode=1
        tap=false
    }if(key==50){
        gamemode=2
    }if(key==51){
        gamemode=3
        whereExplode=0
        tap=false
    }if(key==52){
        gamemode=4
    }
    
    if(key==32){
        if(brPatroni>7){
            brPatroni=0
        }
    }
}

function mouseup() {
    if(gamemode==1){
        if(brPatroni<=7){
            brPatroni=brPatroni+1
            patronX[brPatroni]=myX+20
            patronY[brPatroni]=myY+10
        }
    }if(gamemode==2){
        tap=false
    }if(gamemode==3){
        if(megaBombTimer==0){
            brMegaBomb=brMegaBomb+1
            megaBombX[brMegaBomb]=myX+10
            megaBombY[brMegaBomb]=myY+10
            nextBomb=true
            megaExplosion=false
            megaBombTimer=100
            whereExplode=0
        }
    }if(gamemode==4){
        if(whereToFire<=0){
            whereToFire=100
        
            brPatroniNaGore=brPatroniNaGore+1
            patronNaGoreX[brPatroniNaGore]=myX+25
            patronNaGoreY[brPatroniNaGore]=myY

            brPatroniNaDqsno=brPatroniNaDqsno+1
            patronNaDqsnoX[brPatroniNaDqsno]=myX+70
            patronNaDqsnoY[brPatroniNaDqsno]=myY+25

            brPatroniNaLqvo=brPatroniNaLqvo+1
            patronNaLqvoX[brPatroniNaLqvo]=myX
            patronNaLqvoY[brPatroniNaLqvo]=myY+25
        }
    }
}

function mousedown() {
    if(gamemode==2){
        if(red==false){
            tap=true
        }
    }
}