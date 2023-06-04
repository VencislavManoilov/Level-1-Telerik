let brDiamanti=20,tipkartinka=[],tipkartinka2=[],kartinka=[],kartinka2=[]

for(i=0; i<brDiamanti; i++) {
	kartinka[i]=randomInteger(6);
	kartinka2[i]=randomInteger(6);
}

function update() {

}

function draw() {
	drawLine(window.innerWidth/2, 0, window.innerWidth/2, window.innerHeight)
	for(i=0; i<brDiamanti; i++) {
		context.fillStyle = 'black'
		context.font = '15px Arial'
		context.fillText(i+1 + ".", 0, i*35+45)
		drawImage(gem[kartinka[i]+1], 20, i*35+25, 25, 25)

		context.fillText(i+1 + ".", window.innerWidth-70, i*35+45)
		drawImage(gem[kartinka2[i]+1], window.innerWidth-45, i*35+25, 25, 25)
	}
}

function mouseup() {
	for(i=0; i<brDiamanti; i++) {
		if(areColliding( mouseX, mouseY, 1, 1,  window.innerWidth-45, i*35+25, 25, 25)){
			if(kartinka[i]!=kartinka2[i]){
				console.log("bravo")
			}else{
				console.log("typak")
			}
		}
	}
}