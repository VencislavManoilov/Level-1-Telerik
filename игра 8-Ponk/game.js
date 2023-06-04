// 1. Suzdavame promenlivi
let myX=0,myY=300,myX2=780,myY2=0,myX3,myY3=20,myX4,myY4=560,ballX=400,ballY=200,points=0,sizeX=100,sizeY=100,speed=2,forspeed=0,go=0,start=0,live=3,heartX=-100,heartY=550,heartX2=-100,heartY2=550,heartX3=-100,heartY3=550,heartX4=-100,heartY4=550,heartX5=-100,heartY5=550,heartX6=-100,heartY6=550,laserX=-600,laserY=0,wait=0,gemX=-100,gemY=0,gemT,gems=0,replay=1,forreplay=0,boxX=750,boxY=550,gemX2=-100,gemY2=540,gemX3=-100,gemY3=540,gemX4=-100,gemY4=540,gemX5=-100,gemY5=540,gemX6=-100,gemY6=540,gemX7=-100,gemY7=540,ballX2=-100,ballY2=595,ballX3=-100,ballY3=595,ballX4=-100,ballY4=595,stopBall=false,stopBall2=0,live2=false,pauseX=710,pauseY=560,sizePX=10,sizeYP=30,pause=false,pauseX2=710,pauseY2=560,sizePX2=10,sizeYP2=30,pauseT=false

let audioFart = Audio('Fart - Gaming Sound Effect (HD).mp3');

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX=20
    myY=mouseY-30
    myX2=760
    myY2=mouseY-30
    myX3=mouseX-30
    myY3=20
    myX4=mouseX-30
    myY4=480
    if(pause==false){
        pauseX=760
        pauseY=562.5
        sizeXP=10
        sizeYP=25
        pauseX2=775
        pauseY2=562.5
        sizeXP2=10
        sizeYP2=25
        boxX=-1000
        if(pauseT==false){
            console.log("play")
            pauseT=true
        }
    }if(pause==true){
        boxX=750
        pauseX=710
        pauseX2=725
        if(pauseT==false){
            console.log("pause")
            if(gems>=replay){
                console.log("press any key to buy 1 heart for", replay)
            }else{
                console.log("press any key to restart")
            }
            pauseT=true
        }
    }
    if(live<3){
        heartX3=-1000
    }if(live<2){
        heartX2=-1000
    }if(live<1){
        heartX=-1000
        laserX=100
        ballX=-100
    }
    if(live>0){
        heartX=0
        laserX=-1000
    }
    if(live>1){
        heartX2=50
    }
    if(live>2){
        heartX3=100
    }
    if(gems<7){
        ballX2=-100
        ballX3=-100
        ballX4=-100
    }if(gems<6){
        gemX7=-100
    }if(gems<5){
        gemX6=-100
    }if(gems<4){
        gemX5=-100
    }if(gems<3){
        gemX4=-100
    }if(gems<2){
        gemX3=-100
    }if(gems<1){
        gemX2=-100
    }
    if(gems>0){
        gemX2=220
    }
    if(gems>1){
        gemX3=270
    }
    if(gems>2){
        gemX4=320
    }
    if(gems>3){
        gemX5=370
    }
    if(gems>4){
        gemX6=420
    }
    if(gems>5){
        gemX7=470
    }
    if(gems>6){
        ballX2=530
        ballX3=535
        ballX4=540
    }
    if(pause==false){
        if(go==0){
            ballX=ballX-speed
            ballY=ballY-speed
        }
        if(go==1){
            ballX=ballX-speed
            ballY=ballY+speed
        }
        if(go==2){
            ballX=ballX+speed
            ballY=ballY+speed
        }
        if(go==3){
            ballX=ballX+speed
            ballY=ballY-speed
        }
    }
    if(stopBall==true){
        stopBall2=stopBall2+1
        if(live2==false){
            live=live-1
            ballX=400
            ballY=randomInteger(460)
            go=4
            live2=true
        }
    }
    if(stopBall2>=100){
        go=randomInteger(4)
        stopBall=false
        stopBall2=0
    }
    if(live<1){
        if(gems>=replay){
            if(forreplay==0){
                console.log("press any button to get 1 live for", replay,("gems"))
                forreplay=1
            }
        }else{
            if(forreplay==0){
                console.log("press any button to restart")
                forreplay=1
            }
        }
    }
    if(ballY>myY-60){
        if(ballX>myX-20){
            if(ballX<myX+20){
                if(ballY<myY+60){
                    sizeX=sizeX-3
                    sizeY=sizeY-3
                    gemT=randomInteger(100)
                    if(gemT>=0){
                        if(gemT<=100){
                            gemX=randomInteger(700)
                            gemY=randomInteger(500)
                        }
                    }
                    if(go==1){
                        go=2
                    }
                    if(go==0){
                        go=3
                    }
                    if(forspeed==1){
                        speed=speed+1
                    }
                }
            }
        }
    }
    if(myY2>ballY-sizeY){
        if(myX2>ballX-sizeX){
            if(myY2<ballY+sizeY){
                if(myX2<ballX+sizeX){
                    sizeX=sizeX-3
                    sizeY=sizeY-3
                    gemT=randomInteger(100)
                    if(gemT>=0){
                        if(gemT<=100){
                            gemX=randomInteger(700)
                            gemY=randomInteger(500)
                        }
                    }
                    if(go==3){
                        go=0
                    }
                    if(go==2){
                        go=1
                    }
                    if(forspeed==1){
                        speed=speed+1
                    }
                }
            }
        }
    }
    if(speed>=8){
        speed=8
    }
    if(points<5){
        speed=2
    }
    if(sizeX<=30){
        sizeX=30
    }
    if(sizeY<=30){
        sizeY=30
    }
    if(points>=5){
        speed=3
    }
    if(points>=20){
        speed=4
    }
    if(points>=50){
        speed=5
        forspeed=1
    }else{
        forspeed=0
    }
    if(ballY<=0){
        if(go==0){
            go=1
        }if(go==3){
            go=2
        }
    }
    if(ballY>=540-sizeY){
        if(go==1){
            go=0
        }if(go==2){
            go=3
        }
    }
    if(ballX<=0){
        if(live<1){
            ballX=-1000
        }else{
            stopBall=true
            live2=false
        }
    }
    if(ballX>=800-sizeX){
        live=live-1
        stopBall=true
    }
    if(myY<=0){
        myY=0
    }
    if(myY>=480){
        myY=480
    }
    if(myY2<=0){
        myY2=0
    }
    if(myY2>=480){
        myY2=480
    }
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600)
    drawImage(heartSmall, heartX, heartY, 50, 50)
    drawImage(heartSmall, heartX2, heartY2, 50, 50)
    drawImage(heartSmall, heartX3, heartY3, 50, 50)
    drawImage(heartSmall, heartX4, heartY4, 50, 50)
    drawImage(heartSmall, heartX5, heartY5, 50, 50)
    drawImage(heartSmall, heartX6, heartY6, 50, 50)
    drawImage(gemBlue, gemX, gemY, 80, 80)
    drawImage(gemBlue, gemX2, gemY2, 80, 80)
    drawImage(gemBlue, gemX3, gemY3, 80, 80)
    drawImage(gemBlue, gemX4, gemY4, 80, 80)
    drawImage(gemBlue, gemX5, gemY5, 80, 80)
    drawImage(gemBlue, gemX6, gemY6, 80, 80)
    drawImage(gemBlue, gemX7, gemY7, 80, 80)
    drawImage(boxItem, boxX, boxY, 50, 50)
    drawImage(ballOrTree, ballX2, ballY2, 3, 3)
    drawImage(ballOrTree, ballX3, ballY3, 3, 3)
    drawImage(ballOrTree, ballX4, ballY4, 3, 3)
    drawImage(ballOrTree, ballX, ballY, sizeX, sizeY)
    drawImage(paddle, 0, 540, 800, 10)
    drawImage(paddleGhost, pauseX, pauseY, sizePX, sizeYP)
    drawImage(paddleGhost, pauseX2, pauseY2, sizePX2, sizeYP2)
    drawImage(box, myX, myY, 20, 60)
    drawImage(box, myX2, myY2, 20, 60)
    drawImage(laserRed[2], laserX, laserY, 600, 600)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    if(pause==true){
        if(gems>=replay){
            if(live<3){
                live=live+1
                gems=gems-replay
                replay=replay*2
            }
        }else{
            ballX=400
            ballY=randomInteger(460)
            live=3
            live2=3
            points=0
            speed=1
            forreplay=0
            sizeX=100
            sizeY=100
            gems=0
            gemX=-100
        }
    }
    if(live<1){
        if(gems>=replay){
            gems=gems-replay
            live=live+1
            replay=replay*2
            forreplay=0
            ballX=500
            gemX=-100
        }else{
            ballX=400
            ballY=randomInteger(460)
            live=3
            live2=3
            points=0
            speed=1
            forreplay=0
            sizeX=100
            sizeY=100
            gems=0
            gemX=-100
        }
    }
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    if(pause==false){
        if(mouseY>gemY){
            if(mouseX>gemX){
                if(mouseY<gemY+80){
                    if(mouseX<gemX+80){
                        gems=gems+1
                        gemX=-100
                        if(gems>6){
                            console.log("gems =", gems)
                        }
                    }
                }
            }
        }
    }
    if(mouseY>boxY){
        if(mouseX>boxX){
            if(mouseY<boxY+50){
                if(mouseX<boxX+50){
                    console.log("1.Топката трябва да се удря в платформата, за да не загубиш сърце.")
                    console.log("2.Ако се появи диамант трябва да се натисне, за да го получиш.")
                }
            }
        }
    }
    if(mouseY>pauseY){
        if(mouseX>pauseX){
            if(mouseY<pauseY2+25){
                if(mouseX<pauseX2+10){
                    if(pause==false){
                        pause=true
                        pauseT=false
                    }else{
                        pause=false
                        pauseT=false
                    }
                }
            }
        }
    }
    if(live<1){
        if(gems>=replay){
            gems=gems-replay
            live=live+1
            replay=replay*2
            forreplay=0
            ballX=500
            gemX=-100
        }else{
            ballX=400
            ballY=randomInteger(500)
            live=3
            live2=3
            points=0
            speed=1
            forreplay=0
            sizeX=100
            sizeY=100
            gems=0
            gemX=-100
        }
    }
}
