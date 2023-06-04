let myX=351,myY=251,posoka,minatoX=[],minatoY=[],time=0,brMinati=0,points=0,pointX,pointY,timeforpoint=true,death=false;

function start() {
    myX=351
    myY=251
    posoka=-1
    minatoX=[]
    minatoY=[]
    time=0
    brMinati=0
    points=0
    timeforpoint=true
    death=false
}

function update() {
    time=time+1
    if(time>50){
        brMinati=brMinati+1
        minatoX[brMinati]=myX
        minatoY[brMinati]=myY
        if(posoka==1){
            myX=myX-50
        }if(posoka==2){
            myX=myX+50
        }if(posoka==3){
            myY=myY-50
        }if(posoka==4){
            myY=myY+50
        }
        time=0
    }
    
    if(myX>=800){
        myX=1
    }if(myX<0){
        myX=751
    }if(myY>=600){
        myY=1
    }if(myY<0){
        myY=551
    }
    
    if(areColliding( myX, myY, 50, 50,  pointX, pointY, 46, 46)){
        points=points+1
        timeforpoint=true
    }
    
    if(timeforpoint==true){
        pointX=randomInteger(15)*50+2
        pointY=randomInteger(11)*50+2
        timeforpoint=false
    }
    
    for(ip=0; ip<=points; ip=ip+1){
        if(areColliding( pointX, pointY, 46, 46,  minatoX[brMinati-ip], minatoY[brMinati-ip], 48, 48)){
            timeforpoint=true
        }
        
        if(points!=0){
            if(areColliding( myX, myY, 46, 46,  minatoX[brMinati-ip-1], minatoY[brMinati-ip-1], 46, 46)){
                death=true
            }
        }
    }
}

function draw() {
    if(death){
        drawImage(GameOverSign, 0, 0, 800, 600)
        drawImage(forRestartSign, 140, 300, 500, 95)
    }else{
        context.fillStyle = 'DodgerBlue';
        context.fillRect(0, 0, 800, 600);

        for(i=0; i<=17; i++) {
            drawLine(0, i*50, 800, i*50)
            drawLine(i*50, 0, i*50, 600)
        }
        for(ip=0; ip<=points; ip=ip+1){
            context.fillStyle = 'orange'
            context.fillRect(minatoX[brMinati-ip], minatoY[brMinati-ip], 48, 48)
        }

        context.fillStyle = 'red'
        context.fillRect(myX, myY, 48, 48)

        context.fillStyle = 'lime'
        context.fillRect(pointX, pointY, 46, 46)
        
    }
}

function keyup(key) {
    //console.log("Pressed", key)
    
    if((key==37 || key==65) && posoka!=2){
        posoka=1
    }if((key==39 || key==68) && posoka!=1){
        posoka=2
    }if((key==38 || key==87) && posoka!=4){
        posoka=3
    }if((key==40 || key==83) && posoka!=3){
        posoka=4
    }
    
    if(death==true){
        start()
    }
}