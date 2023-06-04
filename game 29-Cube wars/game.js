let myX=30, myY=window.innerHeight-70,dx=0,dy=0,brPatroni=0,patronX=[],patronY=[], a = false, brVragove=0, vragX=[], vragY=[],time=0,platformaX=[],platformaY=[],brPlatformi=6,brJumpove=0,kryv=5,daserisuvali=[],death=false,score=0,kryvkoqtosevivda=0,timer=[],vragpatronX=[],vragpatronY=[],brVragPatroni=[];

let groundGrass=tryToLoad('groundGrass');

for(j=0; j<brPlatformi; j++){
	platformaX[j]=randomInteger(window.innerWidth-100);
	platformaY[j]=randomInteger(window.innerHeight-150);
}

function restart() {
	myX=30
	myY=window.innerHeight-70
	dx=0,dy=0
	brPatroni=0
	a = false
	brVragove=0
	time=0
	brPlatformi=6
	brJumpove=0
	kryv=5
	death=false
	score=0
	kryvkoqtosevivda=0

	for(j=0; j<brPlatformi; j++){
		platformaX[j]=randomInteger(window.innerWidth-100);
		platformaY[j]=randomInteger(window.innerHeight-150);
	}
}

function update() {
	myX+=dx;
	dx/=1.05;
    dy+=0.1;
    myY+=dy;
    time++;

    kryvkoqtosevivda = kryvkoqtosevivda + (kryv - kryvkoqtosevivda) / 25

	if(isKeyPressed[65]) {
		dx-=0.25;
	}
	if(isKeyPressed[68]) {
		dx+=0.25;
	}

	if(myY + 50 > window.innerHeight - 20) {
		myY=window.innerHeight-70;
		brJumpove=0;
	}

	for(i=0; i<=brPatroni; i++) {
		patronX[i]+=8;
	}

	if(time>200){
		brVragove++;
		vragX[brVragove]=window.innerWidth+randomInteger(200);
		vragY[brVragove]=randomInteger(window.innerHeight-100);
		daserisuvali[brVragove]=false
		brVragPatroni[brVragove]=0
		timer[brVragove]=0
		time=0;
	}

	for(v=0; v<=brVragove; v++) {
		if(!daserisuvali[v]) {
			vragX[v]-=3;
		}

		for(i=0; i<=brPatroni; i++) {
			if(areColliding( patronX[i], patronY[i], 20, 10,  vragX[v], vragY[v], 50, 50)){
				vragX[v]=window.innerWidth+100;
				score++
				daserisuvali[v]=true
			}
		}

		if(!daserisuvali[v]) {
			timer[v]++

			if(timer[v]>100) {
				brVragPatroni[v]++
				vragpatronX[brVragPatroni[v]]=vragX[v]
				vragpatronY[brVragPatroni[v]]=vragY[v]+20
				timer[v]=0
			}
		}

		for(ip=0; ip<brVragPatroni[v]+1; ip++) {
			vragpatronX[ip]-=8

			if(areColliding(myX , myY, 50, 50,  vragpatronX[ip], vragpatronY[ip], 20, 10)) {
				kryv--
				vragpatronX[ip]=window.innerWidth+100;
			}

			for(i=0; i<brPlatformi; i++) {
				if(areColliding(patronX[i], patronY[i], 20, 10,  vragpatronX[ip], vragpatronY[ip], 20, 10)) {
					patronX[i]=window.innerWidth+100
					vragpatronX[ip]=-100
				}
			}

			if(vragpatronX[ip]<0) {
				brVragPatroni[v]--
				vragpatronX[ip]=vragpatronX[brVragPatroni];
				vragpatronY[ip]=vragpatronY[brVragPatroni];
			}
		}
	}

	for(i=0; i<brPlatformi; i++) {
		if(areColliding( platformaX[i]+1, platformaY[i], 99, 1,  myX, myY, 48, 50)){
            if(!areColliding(platformaX[i], platformaY[i]+dy+2, 100, 50, myX, myY, 50, 50)){
                brJumpove=0;
                dy=0;
                myY=platformaY[i]-50;
                brJumpove=0;
            }
        }
	}

	if(myX<0) {
		myX = myX + (0 - myX) / 4;
	}
	if(myX>window.innerWidth-50) {
		myX = myX + (window.innerWidth-50 - myX) / 4;
	}
	if(myY<0) {
		myY = myY + (0 - myY) / 4;
	}

	if(kryv<=0){
		kryv=0
		death=true
	}
}

function draw() {
	if(!death) {
		for(j=0; j<brPlatformi; j++) {
			drawImage(groundGrass, platformaX[j], platformaY[j], 100, 50);
		}

		context.fillStyle = 'black'
		context.font = '25px Arial'
		context.fillText("Score: " + score, 50, 25)

		for(i=0; i<=brPatroni; i++) {
			context.fillStyle = 'cyan';
			context.fillRect(patronX[i], patronY[i], 20, 10);
		}

		for(v=0; v<=brVragove; v++) {
			for(ip=0; ip<brVragPatroni[v]+1; ip++) {
				context.fillStyle = 'orangered';
				context.fillRect(vragpatronX[ip], vragpatronY[ip], 20, 10)
			}
			context.fillStyle = 'red';
			context.fillRect(vragX[v], vragY[v], 50, 50);
		}

		context.fillStyle = 'lime';
		context.fillRect(myX, myY, 50, 50);

		context.fillStyle = 'blue';
		context.fillRect(0, window.innerHeight-20, window.innerWidth, window.innerHeight);

		context.fillStyle = 'orangered';
		context.fillRect(window.innerWidth/2-125, 10, kryvkoqtosevivda*50, 10);
		context.strokeRect(window.innerWidth/2-125, 10, kryvkoqtosevivda*50, 10);
	}else{
		context.fillStyle = 'orangered';
		context.font = '50px Arial';
		context.fillText("Game Over", window.innerWidth/2-150, window.innerHeight/2-100);

		context.fillStyle = 'orange';
		context.font = '30px Arial'
		context.fillText("You stupid!!! Press R to restart!!!", window.innerWidth/2-225, window.innerHeight/2-50);
	}
}

function keyup(key) {
	if(key == 32) {
		if(brJumpove<3){
			dy=-7;
			brJumpove++;
		}
	}

	if(key==80){
        if(isUpdatePaused()){
            startUpdate();
        }else{
            pauseUpdate();
        }
    }

	if(key==82) {
		if(death) {
			restart();
		}
	}

	if(key==69) {
		brPatroni++;
		patronX[brPatroni]=myX+30+dx;
		patronY[brPatroni]=myY+22.5;
	}
}

function mousedown() {
	brPatroni++;
	patronX[brPatroni]=myX+30+dx;
	patronY[brPatroni]=myY+22.5;
}