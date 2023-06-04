let brPoleta = prompt ("Колко полета искаш?!"),imaLiMina=[],kolkobombi=[],clicked=[],typak=false,clickedFirstTime=false,flag=[],right=false;
let x,y;

for(x=0; x<brPoleta; x++){
    imaLiMina[x]=[]
    kolkobombi[x]=[]
    clicked[x]=[]
    flag[x]=[]
    for(y=0; y<brPoleta; y++){
        imaLiMina[x][y]=randomInteger(10)
        kolkobombi[x][y]=0
        clicked[x][y]=0
        flag[x][y]=false
    }
}

for(x=0; x<brPoleta; x++){
    for(y=0; y<brPoleta; y++){
        if(x - 1 >= 0 && imaLiMina[x-1][y]<1){
            kolkobombi[x][y]++
        }
        if(x - 1 >= 0 && y + 1 >= 0 && imaLiMina[x-1][y+1]<1){
            kolkobombi[x][y]++
        }
        if(x - 1 >= 0 && imaLiMina[x-1][y-1]<1){
            kolkobombi[x][y]++
        }
        if(y - 1 >= 0 && x + 1 < brPoleta && imaLiMina[x+1][y-1]<1){
            kolkobombi[x][y]++
        }
        if(y - 1 >= 0 && imaLiMina[x][y-1]<1){
            kolkobombi[x][y]++
        }
        if(x + 1 < brPoleta && imaLiMina[x+1][y]<1){
            kolkobombi[x][y]++
        }
        if(y + 1 < brPoleta && imaLiMina[x][y+1]<1){
            kolkobombi[x][y]++
        }
        if(y + 1 < brPoleta && x + 1 < brPoleta && imaLiMina[x+1][y+1]<1){
            kolkobombi[x][y]++
        }
    }
}

function otvori(x, y) {
    clicked[x][y] = true
    if(kolkobombi[x][y]==0){
        for(let di = -1; di<=1; di++){
            for(let dj=-1; dj<=1; dj++){
                if(x+di>=0 && x+di<brPoleta && y+dj>=0 && y+dj<brPoleta){
                    if(!clicked[x+di][y+dj]){
                        otvori(x + di, y + dj)
                    }
                }
            }
        }
    }
}

function update() {

}

function draw() {
    for(x=0; x<brPoleta; x++){
        for(y=0; y<brPoleta; y++){
            context.strokeRect(x*25, y*25, 25, 25)

            context.fillStyle = 'black'
            context.font = "10px Arial"
            context.fillText(kolkobombi[x][y], x*25 + 9, y*25+17.5)

            drawImage(green2, x*25, y*25, 25, 25)

            if(flag[x][y]){
                context.fillStyle = 'red'
                context.fillRect(x*25, y*25, 25, 25)
            }else{
                if(clicked[x][y]==1){
                    context.fillStyle = 'white'
                    context.fillRect(x*25, y*25, 25, 25)

                    if(kolkobombi[x][y]!=0){
                        context.fillStyle = 'black'
                        context.font = "10px Arial"
                        context.fillText(kolkobombi[x][y], x*25 + 9, y*25+17.5)
                    }
                }
            }

            if(typak){
                if(imaLiMina[x][y]<1){
                    drawImage(box, x*25, y*25, 25, 25)
                }
            }
        }
    }
}

window.oncontextmenu = function() {
    return false;
}

function mouseup() {
    for(x=0; x<brPoleta; x++){
        for(y=0; y<brPoleta; y++){
            if(areColliding( mouseX, mouseY, 1, 1,  x*25, y*25, 25, 25)){
                // clicked[x][y]=1
                otvori(x, y)
                flag[x][y]=false
            }
        }
    }
    for(x=0; x<brPoleta; x++){
        for(y=0; y<brPoleta; y++){
            if(imaLiMina[x][y]<1){
                if(areColliding( x*25, y*25, 25, 25, mouseX, mouseY, 1, 1)){
                    if(!flag[x][y]){
                        typak=true
                        alert("Тъпак опитай пак!!! Натисни space.")
                    }
                }
            }
        }
    }
}

function keyup(key) {
    for(x=0; x<brPoleta; x++){
        for(y=0; y<brPoleta; y++){
            if(areColliding( mouseX, mouseY, 1, 1,  x*25, y*25, 25, 25)){
                flag[x][y] = !flag[x][y];
            }
        }
    }
}