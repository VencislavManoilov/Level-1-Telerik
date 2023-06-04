// 1. Suzdavame promenlivi
let playerX=0,playerY=500,speed=1,live=3,points=0,vragX=randomInteger(720),vragY=-80,heartX=-1000,heartY=550,heartX2=-1000,heartY2=550,heartX3=-1000,heartY3=550,laserX=-1000,laserY=0,startBomb=false,bombX=-1000,bombY=0,explostionX=-1000,boostX=-1000,boostY=0,boost=false,speedBomb=8,boost2,boost3=false,live2=false,go=randomInteger(2),vragbX=-1000,vragbY=0,vragbX2=-1000,vragbY2=0,time=0,vragBomb=false,bombX2=-1000,bombY2=0,bombX3=-1000,bombY3=0,powerX=-1000,powerY=0,power,power2=false,power3=false,power4=false,time2=0,bullet=5,bulletX=760,bulletY=575,bulletX2=760,bulletY2=550,bulletX3=760,bulletY3=525,bulletX4=760,bulletY4=500,bulletX5=760,bulletY5=475,bombX02=-1000,bombY02=0,bombX03=-1000,bombY03=0,bombX04=-1000,bombY04=0,bombX05=-1000,bombY05=0,startBomb2=false,startBomb3=false,startBomb4=false,startBomb5=false,vragX2=-1000,vragY2=-50,vrag2=false,vrag3=0,armorX=-1000,armorY=0,shieldX=-1000,shieldY=470,shield=false,shield2=false,shield3,shield4=false,shield5=false,time3=0,coin=0,left=false,right=false,laser=false,laserX2=-1000,laserY2=0,sizeLaserX=0,laseroMetar=200,laseroMetarX=155,laseroMetarY=560,sizeLaseroMetarX=laseroMetar,laserTemp=0,laserCenter=40,backX=0,backY=0,backX2=0,backY2=-600,back=true,stopLaser=false,playerSpeed=10,bonusHeartX=-1000,bonusHeartY=0,bonusHeart,bonusHeart2=false,bonusHeart3=false,decorX=randomInteger(765),decorY=-550,decorX2=randomInteger(765),decorY2=-150,decorX3=randomInteger(765),decorY3=-350,jellyX=decorX+7.5,jellyY=decorY-20,jellyX2=decorX2+7.5,jellyY2=decorY2- 20,jellyX3=decorX3+7.5,jellyY3=decorY3-20,dX=0,laserTouchVrag=0,razst=0,explosion=false,ys,xs,playerExplosion

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    time=time+1
    vragY2=vragY2+speed
    sizeLaseroMetarX=laseroMetar
    if(shield==true){
        shieldX=playerX-20
        time3=time3+1
    }else{
        shieldX=-1000
        shield=false
        time3=0
    }
    if(time3>=2000){
        shield=false
        shield2=false
        shield3=100
        shield4=false
        shield5=false
    }
    if(time3==100){
        console.log("19 second")
    }if(time3==200){
        console.log("18 second")
    }if(time3==300){
        console.log("17 second")
    }if(time3==400){
        console.log("16 second")
    }if(time3==500){
        console.log("15 second")
    }if(time3==600){
        console.log("14 second")
    }if(time3==700){
        console.log("13 second")
    }if(time3==800){
        console.log("12 second")
    }if(time3==900){
        console.log("11 second")
    }if(time3==1000){
        console.log("10 second")
    }if(time3==1100){
        console.log("9 second")
    }if(time3==1200){
        console.log("8 second")
    }if(time3==1300){
        console.log("7 second")
    }if(time3==1400){
        console.log("6 second")
    }if(time3==1500){
        console.log("5 second")
    }if(time3==1600){
        console.log("4 second")
    }if(time3==1700){
        console.log("3 second")
    }if(time3==1800){
        console.log("2 second")
    }if(time3==1900){
        console.log("1 second")
    }
    if(vrag2==true){
        vragX2=vragX2+(playerX-vragX2-25)/60
        if(vragY2>=600){
            vragY2=-50
        }
        if(vragX2<=0){
            vragX2=0
        }
        if(vragX2>=720){
            vragX2=720
        }
    }else{
        vragX2=-1000
        vragY2=1000
        vrag3=0
    }
    if(vrag3>=3){
        vrag2=false
    }
    if(power4==true){
        time2=time2+1
        bombY2=bombY2-speedBomb
        bombY3=bombY3-speedBomb
        power2=true
        if(time2==0){
            console.log("10 seconds")
        }
        if(time2==100){
            console.log("9 seconds")
        }
        if(time2==200){
            console.log("8 seconds")
        }
        if(time2==300){
            console.log("7 seconds")
        }
        if(time2==400){
            console.log("6 seconds")
        }
        if(time2==500){
            console.log("5 seconds")
        }
        if(time2==600){
            console.log("4 seconds")
        }
        if(time2==700){
            console.log("3 seconds")
        }
        if(time2==800){
            console.log("2 seconds")
        }
        if(time2==900){
            console.log("1 seconds")
        }
        if(time2>=1000){
            power4=false
            power=100
            power2=false
            power3=false
            time2=0
        }
    }
    if(time>=200){
        vragbX=vragX+20
        vragbY=vragY+50
        vragbX2=vragX+50
        vragbY2=vragY+50
        vragBomb=true
        time=0
    }
    if(vragBomb==true){
        vragbY=vragbY+5
        vragbY2=vragbY2+5
    }
    if(live<3){
        heartX3=-1000
    }if(live<2){
        heartX2=-1000
    }if(live<1){
        heartX=-1000
        vragX=-1000
        
        bombX=-1000
        bombY=-1000
        bombX2=-1000
        bombY2=-1000
        bombX3=-1000
        bombY3=-1000
        bombX4=-1000
        bombY4=-1000
        bombX5=-1000
        bombY5=-1000
        
        vragbX=-1000
        vragbY=1000
        vragbX2=-1000
        vragbY2=1000
        
        vrag2=false
        back=false
        shieldX=-1000
        shieldY=-1000
        shield=false
        shield2=false
        shield3=100
        shield4=false
        shield5=false
        
        if(live2==false){
            console.log("press R to restart")
            playerExplosion=playerX
            explosion=true
            live2=true
        }
        
        playerX=-1000
        
        if(explosion==false){
            laserX=100
        }
    }else{
        back=true
        if(vragX>=720){
            go=1
        }
        if(vragX<=0){
            go=0
        }
        
        if(isKeyPressed[65]){
            dX=dX-0.75
        }if(isKeyPressed[37]){
            dX=dX-0.75
        }
        
        if(isKeyPressed[68]){
            dX=dX+0.75
        }if(isKeyPressed[39]){
            dX=dX+0.75
        }
        
        if(dX>playerSpeed){
            dX=playerSpeed
        }
        if(dX<-playerSpeed){
            dX=-playerSpeed
        }
        
        playerX=playerX+dX
        dX=dX/1.05
    }
    if(live>0){
        laserX=-1000
    }
    if(live>0){
        heartX=0
    }
    if(live>1){
        heartX2=50
    }
    if(live>2){
        heartX3=100
    }
    if(live>0){
        if(playerX<=0){
            playerX=0
            dX=0
        }
        if(playerX>=720){
            playerX=720
            dX=0
        }
    }
    if(vragY>=600){
        vragY=-80
        vragX=randomInteger(720)
        time=0
        go=randomInteger(2)
        if(points>=50){
            speed=speed+0.1
        }
        if(vrag2==false){
            vrag2=true
        }
    }
    if(startBomb==true){
        bombY=bombY-speedBomb
    }else{
        bombY=-1000
    }
    if(startBomb2==true){
        bombY02=bombY02-speedBomb
    }else{
        bombY02=-1000
    }
    if(startBomb3==true){
        bombY03=bombY03-speedBomb
    }else{
        bombY03=-1000
    }
    if(startBomb4==true){
        bombY04=bombY04-speedBomb
    }else{
        bombY04=-1000
    }
    if(startBomb5==true){
        bombY05=bombY05-speedBomb
    }else{
        bombY05=-1000
    }
    if(playerY>vragY-80){
        if(playerX>vragX-60){
            if(playerY<vragY+70){
                if(playerX<vragX+60){
                    live=live-1
                    vragX=randomInteger(720)
                    vragY=-80
                    go=randomInteger(2)
                    if(points>=50){
                        speed=speed+0.1
                    }
                }
            }
        }
    }
    if(playerY>vragY2-80){
        if(playerX>vragX2-60){
            if(playerY<vragY2+70){
                if(playerX<vragX2+60){
                    live=live-1
                    vragY2=-80
                    vragX2=randomInteger(720)
                }
            }
        }
    }
    if(bombY>vragY-80){
        if(bombX>vragX-30){
            if(bombY<vragY+70){
                if(bombX<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    startBomb=false
                    go=randomInteger(2)
                    if(power4==false){
                        bombX2=-1000
                        bombX3=-1000
                    }
                    if(points>=50){
                        speed=speed+0.1
                    }
                    if(boost3==false){
                        boost2=randomInteger(100)
                    }
                    if(power2==false){
                        power=randomInteger(100)
                        power3=false
                    }
                    if(shield2==false){
                        shield3=randomInteger(100)
                        shield4=false
                    }
                    if(live<3){
                        if(bonusHeart2==false){
                            bonusHeart=randomInteger(100)
                            bonusHeart2=true
                        }
                    }
                }
            }
        }
    }
    if(bombY02>vragY-80){
        if(bombX02>vragX-30){
            if(bombY02<vragY+70){
                if(bombX02<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    startBomb2=false
                    go=randomInteger(2)
                    if(power4==false){
                        bombX2=-1000
                        bombX3=-1000
                    }
                    if(points>=50){
                        speed=speed+0.1
                    }
                    if(boost3==false){
                        boost2=randomInteger(100)
                    }
                    if(power2==false){
                        power=randomInteger(100)
                        power3=false
                    }
                    if(shield2==false){
                        shield3=randomInteger(100)
                        shield4=false
                    }
                    if(live<3){
                        if(bonusHeart2==false){
                            bonusHeart=randomInteger(100)
                            bonusHeart2=true
                        }
                    }
                }
            }
        }
    }
    if(bombY03>vragY-80){
        if(bombX03>vragX-30){
            if(bombY03<vragY+70){
                if(bombX03<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    startBomb3=false
                    bombX03=-1000
                    go=randomInteger(2)
                    if(power4==false){
                        bombX2=-1000
                        bombX3=-1000
                    }
                    if(points>=50){
                        speed=speed+0.1
                    }
                    if(boost3==false){
                        boost2=randomInteger(100)
                    }
                    if(power2==false){
                        power=randomInteger(100)
                        power3=false
                    }
                    if(shield2==false){
                        shield3=randomInteger(100)
                        shield4=false
                    }
                    if(live<3){
                        if(bonusHeart2==false){
                            bonusHeart=randomInteger(100)
                            bonusHeart2=true
                        }
                    }
                }
            }
        }
    }
    if(bombY04>vragY-80){
        if(bombX04>vragX-30){
            if(bombY04<vragY+70){
                if(bombX04<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    startBomb4=false
                    bombX04=-1000
                    go=randomInteger(2)
                    if(power4==false){
                        bombX2=-1000
                        bombX3=-1000
                    }
                    if(points>=50){
                        speed=speed+0.1
                    }
                    if(boost3==false){
                        boost2=randomInteger(100)
                    }
                    if(power2==false){
                        power=randomInteger(100)
                        power3=false
                    }
                    if(shield2==false){
                        shield3=randomInteger(100)
                        shield4=false
                    }
                    if(live<3){
                        if(bonusHeart2==false){
                            bonusHeart=randomInteger(100)
                            bonusHeart2=true
                        }
                    }
                }
            }
        }
    }
    if(bombY05>vragY-80){
        if(bombX05>vragX-30){
            if(bombY05<vragY+70){
                if(bombX05<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    startBomb5=false
                    bombX05=-1000
                    go=randomInteger(2)
                    if(power4==false){
                        bombX2=-1000
                        bombX3=-1000
                    }
                    if(points>=50){
                        speed=speed+0.1
                    }
                    if(boost3==false){
                        boost2=randomInteger(100)
                    }
                    if(power2==false){
                        power=randomInteger(100)
                        power3=false
                    }
                    if(shield2==false){
                        shield3=randomInteger(100)
                        shield4=false
                    }
                    if(live<3){
                        if(bonusHeart2==false){
                            bonusHeart=randomInteger(100)
                            bonusHeart2=true
                        }
                    }
                }
            }
        }
    }
    if(bombY2>vragY-80){
        if(bombX2>vragX-30){
            if(bombY2<vragY+70){
                if(bombX2<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    bombX2=-1000
                    go=randomInteger(2)
                }
            }
        }
    }
    if(bombY3>vragY-80){
        if(bombX3>vragX-30){
            if(bombY3<vragY+70){
                if(bombX3<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    bombX3=-1000
                    go=randomInteger(2)
                }
            }
        }
    }
    
    if(bombY>vragY2-80){
        if(bombX>vragX2-30){
            if(bombY<vragY2+70){
                if(bombX<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    startBomb=false
                    vrag3=vrag3+1
                }
            }
        }
    }
    if(bombY02>vragY2-80){
        if(bombX02>vragX2-30){
            if(bombY02<vragY2+70){
                if(bombX02<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    startBomb2=false
                    vrag3=vrag3+1
                }
            }
        }
    }
    if(bombY03>vragY2-80){
        if(bombX03>vragX2-30){
            if(bombY03<vragY2+70){
                if(bombX03<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    startBomb3=false
                    vrag3=vrag3+1
                }
            }
        }
    }
    if(bombY04>vragY2-80){
        if(bombX04>vragX2-30){
            if(bombY04<vragY2+70){
                if(bombX04<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    startBomb4=false
                    vrag3=vrag3+1
                }
            }
        }
    }
    if(bombY05>vragY2-80){
        if(bombX05>vragX2-30){
            if(bombY05<vragY2+70){
                if(bombX05<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    startBomb5=false
                    vrag3=vrag3+1
                }
            }
        }
    }
    if(bombY2>vragY2-80){
        if(bombX2>vragX2-30){
            if(bombY2<vragY2+70){
                if(bombX2<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    vrag3=vrag3+0.5
                }
            }
        }
    }
    if(bombY3>vragY2-80){
        if(bombX3>vragX2-30){
            if(bombY3<vragY2+70){
                if(bombX3<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    vrag3=vrag3+0.5
                }
            }
        }
    }
    if(shieldY>vragY-80){
        if(shieldX>vragX-30){
            if(shieldY<vragY+70){
                if(shieldX<vragX+70){
                    points=points+1
                    console.log(points, "points")
                    vragX=randomInteger(720)
                    vragY=-80
                    go=randomInteger(2)
                    console.log("BOOM")
                }
            }
        }
    }
    if(areColliding( shieldX, shieldY, 120, 20,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( shieldX, shieldY, 120, 20,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    if(shieldY>vragY2-80){
        if(shieldX>vragX2-30){
            if(shieldY<vragY2+70){
                if(shieldX<vragX2+70){
                    points=points+1
                    console.log(points, "points")
                    vragY2=-80
                    vrag3=vrag3+1
                    console.log("BOOM")
                }
            }
        }
    }
    if(boost2<=10){
        if(boost3==false){
            boostX=randomInteger(750)
            boostY=randomInteger(550)
            boost3=true
        }
        boost2=100
    }
    if(power<=5){
        if(power3==false){
            powerX=randomInteger(750)
            powerY=randomInteger(550)
            power3=true
        }
    }
    if(shield3<=10){
        if(shield5==false){
            armorX=randomInteger(750)
            armorY=randomInteger(550)
            shield5=true
        }
    }
    if(bonusHeart<30){
        if(bonusHeart3==false){
            bonusHeartX=randomInteger(730)
            bonusHeartY=randomInteger(530)
            bonusHeart3=true
        }
    }else{
        bonusHeart=100
        bonusHeart2=false
        bonusHeart3=false
    }
    if(points>=10){
        if(points<25){
            speed=2
        }
    }
    if(points>=25){
        if(points<50){
            speed=3
        }
    }
    if(speed>4){
        speed=4
    }
    if(boost==true){
        speedBomb=10
    }else{
        speedBomb=4
    }
    if(go==0){
        vragX=vragX+speed
        vragY=vragY+speed
    }
    if(go==1){
        vragX=vragX-speed
        vragY=vragY+speed
    }
    if(areColliding( playerX, playerY, 80, 80,  vragbX, vragbY, 15, 15)){
        live=live-1
        vragbX=-1000
    }
    if(areColliding( playerX, playerY, 80, 80,  vragbX2, vragbY2, 15, 15)){
        live=live-1
        vragbX2=-1000
    }
    if(bullet<5){
        bulletY5=-1000
    }if(bullet<4){
        bulletY4=-1000
    }if(bullet<3){
        bulletY3=-1000
    }if(bullet<2){
        bulletY2=-1000
    }if(bullet<1){
        bulletY=-1000
    }
    if(live>0){
        if(bullet>0){
            bulletY=575
        }
        if(bullet>1){
            bulletY2=550
        }
        if(bullet>2){
            bulletY3=525
        }
        if(bullet>3){
            bulletY4=500
        }
        if(bullet>4){
            bulletY5=475
        }
    }else{
        bulletY=-1000
        bulletY2=-1000
        bulletY3=-1000
        bulletY4=-1000
        bulletY5=-1000
    }
    if(left==true){
        playerX=playerX-playerSpeed
    }
    if(right==true){
        playerX=playerX+playerSpeed
    }
    
    if(laser==true){
        laserX2=playerX+laserCenter
        laserCenter=laserCenter-0.5
        sizeLaserX=sizeLaserX+1
        laseroMetar=laseroMetar-0.75
        laserTemp=laserTemp+53
        console.log(laserTemp, "C")
        if(areColliding( laserX2, laserY2, sizeLaserX, 520,  vragX, vragY, 80, 80)){
            vragX=randomInteger(720)
            vragY=-80
            points=points+1
            console.log(points, "points")
        }
        
        if(areColliding( laserX2, laserY2, sizeLaserX, 520,  vragX2, vragY2, 80, 80)){
            laserTouchVrag=laserTouchVrag+1
            
            if(laserTouchVrag>15){
                vrag3=vrag3+1
                points=points+1
                console.log(points, "points")
                laserTouchVrag=0
            }
        }
    }else{
        laserCenter=40
        sizeLaserX=0
        laserX2=-1000
        laseroMetar=laseroMetar+0.25
        laserTemp=laserTemp-26
        
    }
    
    if(sizeLaserX>=20){
        sizeLaserX=20
    }
    
    if(laseroMetar>=200){
        laseroMetar=200
    }
    
    if(laseroMetar<=0){
        laseroMetar=0
        laserTemp=0
        laser=false
        stopLaser=true
    }
    
    if(laserCenter<=30){
        laserCenter=30
    }
    
    if(laserTemp<=0){
        laserTemp=0
    }
    
    if(back==true){
        backY=backY+speed/3
        backY2=backY2+speed/3
    }
    
    if(backY>=600){
        backY=backY2-600
    }
    if(backY2>=600){
        backY2=backY-600
    }
    
    if(stopLaser==true){
        laser=false
    }
    
    if(laseroMetar>100){
        stopLaser=false
    }
    
    if(playerSpeed<1){
        playerSpeed=1
    }
    
    if(areColliding( laserX2, laserY2, sizeLaserX, 530,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( laserX2, laserY2, sizeLaserX, 530,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    
    if(areColliding( bombX, bombY, 20, 40,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( bombX02, bombY02, 20, 40,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( bombX03, bombY03, 20, 40,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( bombX04, bombY04, 20, 40,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( bombX05, bombY05, 20, 40,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( bombX, bombY, 20, 40,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    if(areColliding( bombX02, bombY02, 20, 40,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    if(areColliding( bombX03, bombY03, 20, 40,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    if(areColliding( bombX04, bombY04, 20, 40,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    if(areColliding( bombX05, bombY05, 20, 40,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    if(areColliding( bombX2, bombY2, 20, 40,  vragbX, vragbY, 15, 15)){
        vragbX=-1000
    }
    if(areColliding( bombX3, bombY3, 20, 40,  vragbX2, vragbY2, 15, 15)){
        vragbX2=-1000
    }
    
    if(live>0){
        decorY=decorY+speed/2
        decorY2=decorY2+speed/2
        decorY3=decorY3+speed/2
        jellyX=decorX+7.5
        jellyX2=decorX2+7.5
        jellyX3=decorX3+7.5
        jellyY=decorY-20
        jellyY2=decorY2-20
        jellyY3=decorY3-20
        if(decorY>=620){
            decorX=randomInteger(765)
            decorY=-550
        }
        if(decorY2>=620){
            decorX2=randomInteger(765)
            decorY2=-150
        }
        if(decorY3>=620){
            decorX3=randomInteger(765)
            decorY3=-350
        }
    }
    
    if(explosion==true){
        razst=razst+3
    }
    
    if(razst>425){
        explosion=false
    }
    
    if(explosion==false){
        xs=-8
        ys=-8
        razst=0
    }
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backStars, backX, backY, 800, 600)
    drawImage(backStars, backX2, backY2, 800, 600)
    drawImage(groundGrass, decorX, decorY, 35, 20)
    drawImage(groundCake, decorX2, decorY2, 35, 20)
    drawImage(groundSnow, decorX3, decorY3, 35, 20)
    drawImage(tanksArmor, armorX, armorY, 50, 50)
    drawImage(jelly[2], jellyX, jellyY, 20, 20)
    drawImage(jelly[5], jellyX2, jellyY2, 20, 20)
    drawImage(jelly[1], jellyX3, jellyY3, 20, 20)
    drawImage(heartSmall, bonusHeartX, bonusHeartY, 70, 70)
    drawImage(paddle, bulletX, bulletY, 35, 20)
    drawImage(paddle, bulletX2, bulletY2, 35, 20)
    drawImage(paddle, bulletX3, bulletY3, 35, 20)
    drawImage(paddle, bulletX4, bulletY4, 35, 20)
    drawImage(paddle, bulletX5, bulletY5, 35, 20)
    if(laseroMetar>100){
        drawImage(powerupGreen, laseroMetarX, laseroMetarY, sizeLaseroMetarX, 30)
    }
    if(laseroMetar<=100){
        if(laseroMetar>50){
            drawImage(powerupYellow, laseroMetarX, laseroMetarY, sizeLaseroMetarX, 30)
        }
    }
    if(laseroMetar<=50){
        drawImage(powerupRed, laseroMetarX, laseroMetarY, sizeLaseroMetarX, 30)
    }
    drawImage(tanksAmmo, boostX, boostY, 50, 50)
    drawImage(powerupBlueStar, powerX, powerY, 50, 50)
    drawImage(heartSmall, heartX, heartY, 50, 50)
    drawImage(heartSmall, heartX2, heartY2, 50, 50)
    drawImage(heartSmall, heartX3, heartY3, 50, 50)
    drawImage(explosion2, vragbX, vragbY, 15, 15)
    drawImage(explosion2, vragbX2, vragbY2, 15, 15)
    drawImage(missile[3], bombX, bombY, 20, 40)
    drawImage(missile[3], bombX02, bombY02, 20, 40)
    drawImage(missile[3], bombX03, bombY03, 20, 40)
    drawImage(missile[3], bombX04, bombY04, 20, 40)
    drawImage(missile[3], bombX05, bombY05, 20, 40)
    drawImage(missile[1], bombX2, bombY2, 15, 30)
    drawImage(missile[1], bombX3, bombY3, 15, 30)
    drawImage(laserRed[2],laserX, laserY, 600, 600)
    drawImage(spaceship[5], vragX, vragY, 80, 80)
    drawImage(paddle, laserX2, laserY2, sizeLaserX, 530)
    drawImage(playerShip2_blue, playerX, playerY, 80, 80)
    drawImage(spaceship[3], vragX2, vragY2, 80, 80)
    drawImage(powerupBlue, shieldX, shieldY, 120, 20)
    if(explosion==true){
        for(xs=-8; xs<=8; xs=xs+1){
            for(ys=-8; ys<=8; ys=ys+1){
                if(xs==0 || ys==0 || xs==ys || xs+ys==0){
                    if(xs==0 && ys==0){

                    }else{
                        drawImage(paddle, playerExplosion+35+razst*xs, playerY+razst*ys, 4, 4)
                    }
                }
            }
        }
    }
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    
    //console.log("Pressed", key)
    
    //if(explosion==false){explosion=true}else{explosion=false}
    
    if(live<1){
        if(key==82){
            speed=1
            live=3
            points=0
            vragX=randomInteger(720)
            vragY=-80
            startBomb=false
            boost=false
            boost3=false
            live2=false
            power4=false
            power=100
            power2=false
            power3=false
            time2=0
            bullet=5
            vrag2=false
            laseroMetar=200
            laserTemp=0
            bonusHeartX=-1000
            bonusHeart=100
            bonusHeart2=false
            bonusHeart3=false
            explosion=false
        }
    }
    if(key==32){
        if(bullet<1){
            if(bombY<=40){
                bullet=5
            }if(startBomb5==false){
                bullet=5
            }
        }
    }
    if(key==37 || key==65){
        left=false
    }
    if(key==39 || key==68){
        right=false
    }
    if(key==87){
        laser=false
    }
    
    if(key==83){
        if(live>0){
            if(bullet==5){
                bombX05=playerX+30
                bombY05=playerY
                startBomb5=true
            }if(bullet==4){
                bombX04=playerX+30
                bombY04=playerY
                startBomb4=true
            }if(bullet==3){
                bombX03=playerX+30
                bombY03=playerY
                startBomb3=true
            }if(bullet==2){
                bombX02=playerX+30
                bombY02=playerY
                startBomb2=true
            }if(bullet==1){
                bombX=playerX+30
                bombY=playerY
                startBomb=true
            }
            bullet=bullet-1
        }
    }
}

function keydown(key){
    if(live>0){
        if(key==87){
            if(stopLaser==false){
                laser=true
            }
        }
    }
    
    if(key==38){
        playerSpeed=playerSpeed+1
        console.log(playerSpeed, "top speed")
    }
    if(key==40){
        playerSpeed=playerSpeed-1
        console.log(playerSpeed, "top speed")
    }
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
   if(live>0){
        if(bullet==5){
            bombX05=playerX+30
            bombY05=playerY
            startBomb5=true
        }if(bullet==4){
            bombX04=playerX+30
            bombY04=playerY
            startBomb4=true
        }if(bullet==3){
            bombX03=playerX+30
            bombY03=playerY
            startBomb3=true
        }if(bullet==2){
            bombX02=playerX+30
            bombY02=playerY
            startBomb2=true
        }if(bullet==1){
            bombX=playerX+30
            bombY=playerY
            startBomb=true
        }
        bullet=bullet-1
    }
    if(mouseY>boostY-50){
        if(mouseX>boostX-50){
            if(mouseY<boostY+50){
                if(mouseX<boostX+50){
                    boost=true
                    boostX=-1000
                    console.log("Now you have boost for bomb speed!!!")
                }
            }
        }
    }
    if(mouseY>powerY-50){
        if(mouseX>powerX-50){
            if(mouseY<powerY+50){
                if(mouseX<powerX+50){
                    powerX=-1000
                    power4=true
                }
            }
        }
    }
    if(mouseY>armorY-50){
        if(mouseX>armorX-50){
            if(mouseY<armorY+50){
                if(mouseX<armorX+50){
                    armorX=-1000
                    shield=true
                }
            }
        }
    }
    if(areColliding( mouseX, mouseY, 1, 1,  bonusHeartX, bonusHeartY, 70, 70)){
        bonusHeartX=-1000
        live=live+1
        bonusHeart=100
        bonusHeart2=false
        bonusHeart3=false
    }
    if(power4==true){
        bombX2=playerX
        bombY2=playerY+30
        bombX3=playerX+65
        bombY3=playerY+30
    }
}
