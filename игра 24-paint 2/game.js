let svetiLi=[],x,y,natisnalLiSym=false

for(x=0; x<=1536; x=x+1){
    svetiLi[x]=[]
    for(y=0; y<=754; y=y+1){
        svetiLi[x][y]=false
    }
}

console.log(window.innerWidth, window.innerHeight)

function update() {
    if(natisnalLiSym){
        for(x=mouseX; x<=mouseX+1; x=x+1){
            for(y=mouseY; y<=mouseY+1; y=y+1){
                svetiLi[x][y]=true
            }
        }
    }
}

function draw() {
    for(x=0; x<=1536; x=x+1){
        for(y=0; y<=754; y=y+1){
            if(svetiLi[x][y]){
                drawImage(powerupBlue, x-12.5, y-12.5, 25, 25)
            }
        }
    }
}

function mousedown() {
    natisnalLiSym=true
}

function mouseup() {
    natisnalLiSym=false
}

