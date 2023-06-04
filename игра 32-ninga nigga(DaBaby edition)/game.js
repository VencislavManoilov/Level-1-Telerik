let myX=20, myY=window.innerHeight-150, dx=0, left=true,brVragove=0,vragX=[],vragY=[],time=100,strana=[],kryv=5,kryvkoqtosepokazva=0,death=false,mojelidasepremesti=false,score=0,dasepokajeli=[],tipKartinka=[],kartinka=[],bestscoreNinga=0,playOrPause=true;

let audioVibez = new Audio('DaBaby - VIBEZ (Official Music Video).mp3');
let audioBop = new Audio('DaBaby - BOP (Lyrics).mp3')

tipKartinka[0]='red';
tipKartinka[1]='pink';

function update() {
	myX+=dx

	if(left) {
		dx-=0.75
	}else{
		dx+=0.75
	}

	if(areColliding( myX, myY, 50, 50,  0, 0, 20, window.innerHeight)) {
		myX=21
		mojelidasepremesti=false
		dx=0
	}if(areColliding( myX, myY, 50, 50,  500, 0, 20, window.innerHeight)) {
		myX=449
		dx=0
		mojelidasepremesti=false
	}

	time++
	if(time>100) {
		brVragove++
		strana[brVragove]=randomInteger(2)
		dasepokajeli[brVragove]=false
		if(strana[brVragove]==0) {
			vragX[brVragove]=20
		}else{
			vragX[brVragove]=470
		}
		vragY[brVragove]=-30
		if(kryv<5) {
			kartinka[i]=randomInteger(2)
		}else{
			kartinka[i]=0
		}

		time=0
	}

	for(i=0; i<brVragove; i++) {
		if(!dasepokajeli[i]) {
			vragY[i]+=3
		}else{
			vragY[i]=-100
		}

		if(areColliding( myX, myY, 50, 50,  vragX[i], vragY[i], 30, 30)) {
			if(kartinka[i]==0) {
				dasepokajeli[i]=true
				kryv--
			}
			if(kartinka[i]==1) {
				dasepokajeli[i]=true

				if(kryv<5) {
					kryv++
				}else{
					score+=randomInteger(250)
				}
			}
		}

		if(vragY[i]>window.innerHeight){
			dasepokajeli[i]=true
			score+=randomInteger(25)
		}

		if(kryv>5) {
			kryv=5
		}
	}

	kryvkoqtosepokazva = kryvkoqtosepokazva + (kryv - kryvkoqtosepokazva) / 25;	

	if(kryv<=0) {
		death=true
		if(play) {
			audioBop.play();
		}else{
			audioVibez.currentTime = 0;
		}
		audioVibez.pause();
		audioVibez.currentTime = 0;
		if(score>localStorage.bestscoreNinga) {
			localStorage.bestscoreNinga=score
		}
	}else{
		if(playOrPause) {
			audioVibez.play();
		}else{
			audioVibez.currentTime = 0;
		}
		if(score>localStorage.bestscoreNinga) {
			localStorage.bestscoreNinga=score
		}
	}
}

function draw() {
	if(death) {
		drawImage(dasad, 0, 0, window.innerWidth, window.innerHeight);

		context.fillStyle = 'orangered';
		context.font = '100px Arial';
		context.fillText("Game Over", window.innerWidth/2-250, window.innerHeight/2-100);

		context.fillStyle = 'orange';
		context.font = '50px Arial';
		context.fillText("Press R to restart", window.innerWidth/2-200, window.innerHeight/2-25)
	}else{
		context.fillStyle = 'cyan';
		context.fillRect(0, 0, 20, window.innerHeight);
		context.fillRect(500, 0, 20, window.innerHeight);

		context.fillStyle = 'lime';
		context.fillRect(myX, myY, 50, 50);

		for(i=0; i<brVragove; i++) {
			context.fillStyle = tipKartinka[kartinka[i]];
			context.fillRect(vragX[i], vragY[i], 30, 30)
		}

		context.fillStyle = 'orangered';
		context.fillRect(115, window.innerHeight-50, kryvkoqtosepokazva*50, 10)
		context.strokeRect(115, window.innerHeight-50, 250, 10)

		context.fillStyle = 'black';
		context.font = '25px Arial';
		context.fillText("Score: " + score, 525, 35);

		context.fillText("Bestscore: " + localStorage.bestscoreNinga, 525, 575)

		drawImage(dababy, 520, 50, 1000, 500);

		drawImage(play, 990, 275, 50, 50)
	}
}

function keyup(key) {
	if(key==32) {
		if(!mojelidasepremesti) {
			left = !left
			mojelidasepremesti=true
		}
	}

	if(death) {
		if(key==82) {
			document.location.reload(true);
		}
	}
}

function mouseup() {
	if(areColliding(mouseX, mouseY, 1, 1,  990, 275, 50, 50)) {
		playOrPause = !playOrPause;
	}
}