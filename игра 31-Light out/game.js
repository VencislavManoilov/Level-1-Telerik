brKrvadratcheta=6,svetili=[]

for(x=0; x<brKrvadratcheta; x++) {
	svetili[x]=[]
		for(y=0; y<brKrvadratcheta; y++) {
			svetili[x][y]=randomInteger(2)
		}
	}

function update() {

}

function draw() {
	for(x=0; x<brKrvadratcheta; x++) {
		for(y=0; y<brKrvadratcheta; y++) {
			if(!svetili[x][y]){
				context.fillStyle = 'DarkGreen';
				context.fillRect(x*52, y*52, 50, 50)
			}else{
				context.fillStyle = 'lime';
				context.fillRect(x*52, y*52, 50, 50)
			}
		}
	}
}

function mouseup() {
	for(x=0; x<brKrvadratcheta; x++) {
		for(y=0; y<brKrvadratcheta; y++) {
			if(areColliding( x*52, y*52, 50, 50,  mouseX, mouseY, 1, 1)){
				svetili[x][y]=!svetili[x][y]
			svetili[x-1][y]=!svetili[x-1][y]
			svetili[x+1][y]=!svetili[x+1][y]
			svetili[x][y-1]=!svetili[x][y-1]
			svetili[x][y+1]=!svetili[x][y+1]
			}
		}
	}
}