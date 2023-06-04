let myX=window.innerWidth/2-50,myY=10,dx=0,dy=0,brPlatformi=1,platformaX=[],platformaY=[],time=100,brJumpove=0,tipKartinka=[],kartinka=[],score=0,bestscore=0,daserisuvali=[],death=false,padali=[],padady=[],scrivalise=[],platformasizex=[],platformasizey=[];

for(let i=0; i<brPlatformi; i++){
    kartinka[i]=0;
    platformaX[i]=myX-25;
    platformaY[i]=window.innerHeight/2-20;
    daserisuvali[i]=false;
    padali[i]=false;
    scrivalise[i]=false
    platformasizex[i]=100
    platformasizey[i]=50
    padady[i]=0;
}

let groundGrass=tryToLoad('groundGrass');
let groundStone=tryToLoad('groundStone');
let groundCake=tryToLoad('groundCake');
let fakePlatforma=tryToLoad('fakePlatforma');
let arrowUp=tryToLoad('arrowUp');
let GameOverSign=tryToLoad('GameOverSign');
let forRestartSign=tryToLoad('forRestartSign');
let ballOrTree=tryToLoad('ballOrTree');
let groundSnow=tryToLoad('groundSnow');
let mangizi=tryToLoad('mangizi');
let paddleGhost=tryToLoad('paddleGhost');


tipKartinka[0]=groundGrass;
tipKartinka[1]=groundStone;
tipKartinka[2]=groundCake;
tipKartinka[3]=fakePlatforma;
tipKartinka[4]=groundSnow;
tipKartinka[5]=mangizi;
tipKartinka[6]=paddleGhost

function restart() {
    death=false
    brPlatformi++
    myX=window.innerWidth/2-50;
    myY=10;

    for(let i=0; i<brPlatformi; i++){
        kartinka[i]=0;
        platformaX[i]=myX-25;
        platformaY[i]=window.innerHeight/2-20;
        daserisuvali[i]=false;
        padali[i]=false;
        scrivalise[i]=false
        platformasizex[i]=100
        platformasizey[i]=50
        padady[i]=0;
    }

    score=0;
    dx=0;
    dy=0;
    time=100;
    brJumpove=0;
}

function update() {
    dy+=0.05;
    myY+=dy;
    dx=dx/1.05;
    myX+=dx;
    time++;

    if(myX<-50){
        myX=window.innerWidth;
    }if(myX>window.innerWidth){
        myX=-50;
    }

    for(i=0; i<brPlatformi; i++){
        if(!daserisuvali[i]){
            platformaY[i]-=1;
        }

        if(areColliding( platformaX[i]+1, platformaY[i], 99, 1,  myX, myY, 50, 50)){
            if(!areColliding(platformaX[i], platformaY[i]+dy+2, 100, 50, myX, myY, 50, 50)){
                brJumpove=0;

                if(kartinka[i]==0){
                    dy=0;
                    myY=platformaY[i]-50;
                }

                if(kartinka[i]==1){
                    dy=0;
                    padali[i]=true;
                }

                if(kartinka[i]==2){
                    death=true
                }
                if(kartinka[i]==3){
                    scrivalise[i]=true
                }

                if(kartinka[i]!=3){
                    dx/=1.05
                }

                if(kartinka[i]==4){
                    dx/=1.5
                    myY=platformaY[i]-50
                    dy=0
                }

                if(kartinka[i]==6){
                    dy=0;
                    myY=platformaY[i]-50;
                    dx*=1.25
                }
            }
        }

        if(areColliding( platformaX[i], platformaY[i], platformasizex[i], platformasizey[i],  myX, myY, 50, 50)){
            if(kartinka[i]==5) {
                if(!scrivalise[i]){
                    score+=randomInteger(250);
                    scrivalise[i]=true;
                }
            }
        }

        if(platformaY[i]<-50){
            score+=randomInteger(25);
            platformaY[i]=window.innerHeight+1000;
            daserisuvali[i]=true;

            if(score>localStorage.bestscore){
                localStorage.bestscore=score;
            }

        }

        if(death){
            daserisuvali[i]=true;
            brPlatformi=0;
        }

        if(padali[i]){
            padady[i]+=0.05
            platformaY[i]+=padady[i]
        }

        if(scrivalise[i]){
            if(kartinka[i]==3) {
                platformaX[i]+=1
                platformaY[i]+=1
                platformasizex[i]/=1.05
                platformasizey[i]/=1.05
            }if(kartinka[i]==5) {
                platformaX[i]+=0.5
                platformaY[i]+=1
                platformasizex[i]/=1.05
                platformasizey[i]/=1.05
            }
        }
    }

    if(time>=100){
        brPlatformi++;
        daserisuvali[i]=false
        kartinka[i]=randomInteger(7);
        scrivalise[i]=false

        if(kartinka[i]!=5){
            platformasizex[i]=100
            platformasizey[i]=50
            platformaX[i]=randomInteger(window.innerWidth-50);
            platformaY[i]=window.innerHeight+randomInteger(100);
        }else{
            platformasizex[i]=50
            platformasizey[i]=50
            platformaX[i]=platformaX[i-1]+randomInteger(50);
            platformaY[i]=platformaY[i-1]-50;
        }
        padady[i]=0;

        time=0;
    }

    if(isKeyPressed[65]){
        dx-=0.25;
    }
    if(isKeyPressed[68]){
        dx+=0.25;
    }

    if(myY>window.innerHeight+100){
        death=true;
    }

    if(death){
        brPlatformi=0;
        if(score>localStorage.bestscore){
            localStorage.bestscore=score;
        }
    }
}

function draw() {
    if(!death){
        for(i=0; i<brPlatformi; i++){
            drawImage(tipKartinka[kartinka[i]], platformaX[i], platformaY[i], platformasizex[i], platformasizey[i]);
        }

        if(myY<=-50){
            drawImage(arrowUp, myX, 0, 50, 50)
        }
    
        drawImage(ballOrTree, myX, myY, 50, 50);
    
        context.fillStyle = 'black';
        context.font = "25px Arial";
        context.fillText("Score: " + score, 50, 30);

        context.fillText("Bestscore: " + localStorage.bestscore, window.innerWidth-200, 30);

    }else{
        drawImage(GameOverSign, window.innerWidth/2-400, window.innerHeight/2-400);
        drawImage(forRestartSign, window.innerWidth/2-255, window.innerHeight/2-100);

        context.fillStyle = 'orangered';
        context.font = "25px Arial";
        context.fillText("Score: " + score, 50, 30);

        context.fillText("Bestscore: " + localStorage.bestscore, window.innerWidth-200, 30);
    }
}

function keyup(key) {
    //console.log(key);

    if(!isUpdatePaused()){
        if(key==32){
            if(brJumpove<2){
                dy=-4;
                brJumpove++;
            }
        }
    }

    if(key==82){
        if(death){
            restart();
        }
    }

    if(key==80){
        if(isUpdatePaused()){
            startUpdate();
        }else{
            pauseUpdate();
        }
    }
}