let myX=50,myY=(600-30)/2,dX=0,dY=0,vragX=[],vragY=[],brVragove=0,timeForVrag=100,brBack=1,backX=0,backX2=800,tipKartinka=[],kartinka=[],sizeVragX=[],sizeVragY=[],kryv=5,kryvkoqtosevivda=0,dasespirali=[],death=false;

tipKartinka[0]=robot;
tipKartinka[1]=vehicle[4];
tipKartinka[2]=vehicle[5];
tipKartinka[3]=vehicle[6];
tipKartinka[4]=vehicle[7];

function restart() {
    myX=50,myY=(600-30)/2,dX=0,dY=0,brVragove=0,timeForVrag=100,brBack=1,backX=0,backX2=800,kryv=5,kryvkoqtosevivda=0,death=false;
}

function update() {
    backX-=dX
    backX2-=dX
    myY+=dY
    dY/=1.05

    kryvkoqtosevivda = kryvkoqtosevivda + (kryv - kryvkoqtosevivda) / 25
    
    if(myX<50) {
        myX = myX + (50 - myX) / 35
    }

    if(myX>(600-30)/2-80) {
        myX = myX + ((600-30)/2-80 - myX) / 100
    }

    if(myY<150) {
        myY = myY + (150 - myY) / 15
    }

    if(myY>500) {
        myY = myY + (500 - myY) / 15
    }

    if(dX>10) {
        dX=10
    }
    
    if(isKeyPressed[39] || isKeyPressed[68]){
        dX+=0.03125
    }if(isKeyPressed[37] || isKeyPressed[65] || isKeyPressed[16]){
        dX/=1.025
    }

    if(backX<=-800) {
        backX=0
    }
    if(backX2<=0) {
        backX2=800
    }

    if(isKeyPressed[87] || isKeyPressed[38]) {
        dY-=0.2;
    }if(isKeyPressed[83] || isKeyPressed[40]) {
        dY+=0.2;
    }

    if(timeForVrag>50) {
        brVragove++
        vragX[brVragove]=800
        vragY[brVragove]=100+randomInteger(370)
        kartinka[brVragove-1]=randomInteger(5)
        dasespirali[brVragove]=false
        if(kartinka[brVragove-1]!=0){
            sizeVragX[i]=64
            sizeVragY[i]=64
        }else{
            sizeVragX[i]=75
            sizeVragY[i]=50
        }
        timeForVrag=0
    }

    if(dX>2){
        timeForVrag++
    }

    for(i=0; i<brVragove; i++) {
        vragX[i]-=dX

        if(areColliding(  myX, myY, 100, 30,  vragX[i], vragY[i], sizeVragX[i], sizeVragY[i])){
            dX/=1.1
            if(!dasespirali[i]){
                if(kryv>0){
                    kryv--
                }
            }
            dasespirali[i]=true
        }else{
            dasespirali[i]=false
        }
    }

    if(kryv<=0) {
        death=true
    }
}

function draw() {
    if(!death) {
        drawImage(backStreet, backX, 0, 800, 600)
        drawImage(backStreet, backX2, 0, 800, 600)

        drawImage(carBody, myX+dX*10, myY, 80, 30)

        for(i=0; i<brVragove; i++) {
            drawImage(tipKartinka[kartinka[i]], vragX[i], vragY[i], sizeVragX[i], sizeVragY[i]);
        }

        context.fillStyle = 'orangered';
        context.fillRect(250, 10, kryvkoqtosevivda*50, 10);
        context.strokeRect(250, 10, kryvkoqtosevivda*50, 10);
    }else{
        drawImage(GameOverSign, 0, 0)
    }
}

function keyup(key) {
    //console.log(key)

    if(key==82) {
        restart();
    }
}